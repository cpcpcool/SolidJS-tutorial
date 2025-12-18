```
# SolidJS 단계별 실습 가이드 (TSX · Vinxi 기준)

> 기준 환경

* SolidJS 기본 프로젝트 (`solid-basic`)
* Vinxi dev server
* `npm run dev` 실행 중
* `src/App.tsx` 기준
```

# SolidJS 프론트 기본기 & SPA 설계 가이드 (실무 기준)

본 문서는 SolidJS를 사용한 프론트엔드 개발 시  
**필수로 알아야 할 기본 API와 SPA 설계 원칙**을 실무 관점에서 정리한 문서입니다.

React 경험자를 기준으로 작성되었으며,  
과도한 추상화 없이 **Solid의 강점을 최대한 활용하는 기준**을 제시합니다.

---

## 1️. SolidJS 프론트 기본기 – 실무 체크리스트

### 🔹 A. 상태 / 반응성 (Core Runtime)

| 구분 | API | 역할 | 실무 사용 포인트 | 참고 파일 |
|---|---|---|---|---|
| 상태 | createSignal | 단일 값 상태 | 입력값, 토글, 플래그 | [Basic1.tsx](src/components/Basic1.tsx) |
| 파생 | createMemo | 계산 캐시 | 필터링, 계산값 | [Basic2.tsx](src/components/Basic2.tsx) |
| 부수효과 | createEffect | 반응형 사이드 이펙트 | 로깅, 외부 연동 | [Basic3.tsx](src/components/Basic3.tsx) |
| 배치 | batch | 업데이트 묶기 | 이벤트 핸들러 | [Basic9.tsx](src/components/Basic9.tsx) |
| 의존성 제어 | untrack | 추적 차단 | effect 내부 참조 | [Basic8.tsx](src/components/Basic8.tsx) |

---

### 🔹 B. 컬렉션 / 구조화 상태

| 구분 | API | 역할 | 사용 기준 | 참고 파일 |
|---|---|---|---|---|
| 리스트 렌더 | `<For>` | 배열 렌더 | map 대체 | [Basic4.tsx](src/components/Basic4.tsx) |
| 구조적 상태 | createStore | 객체/배열 상태 | 폼, 리스트 | [Basic6.tsx](src/components/Basic6.tsx) |
| 상태 변경 | setStore | 부분 업데이트 | 불변성 관리 불필요 | [Basic6.tsx](src/components/Basic6.tsx) |

---

### 🔹 C. UI 조건 렌더링

| 구분 | API | 목적 | React 대비 | 참고 파일 |
|---|---|---|---|---|
| 단일 조건 | `<Show>` | when / fallback | `&&`보다 안전 | [Basic5.tsx](src/components/Basic5.tsx) |
| 다중 분기 | `<Switch>` / `<Match>` | 상태 분기 | if-else 대체 | [Basic11.tsx](src/components/Basic11.tsx) |

---

### 🔹 D. 라이프사이클

| 구분 | API | 언제 사용 | 참고 파일 |
|---|---|---|---|
| 마운트 | onMount | DOM 접근, observer | [Basic7.tsx](src/components/Basic7.tsx) |
| 정리 | onCleanup | 이벤트 해제, 타이머 | [Basic7.tsx](src/components/Basic7.tsx) |

**원칙**
- `createEffect` ≠ 라이프사이클  
- 생명주기 목적이면 **onMount / onCleanup 우선**

---

### 🔹 E. 데이터 패칭

| API | 특징 | 실무 포인트 | 참고 파일 |
|---|---|---|---|
| createResource | loading / error 내장 | React Query 대체 | [Basic10.tsx](src/components/Basic10.tsx) |
|  | signal 기반 재요청 | 파라미터 변경 자동 | [Basic10.tsx](src/components/Basic10.tsx) |

---

### 🔹 F. 컴포넌트 설계

| 항목 | API | 이유 | 참고 파일 |
|---|---|---|---|
| children | ParentComponent | children도 reactive | [Basic12.tsx](src/components/Basic12.tsx) |
| props 분해 | splitProps | 반응성 유지 | [Basic13.tsx](src/components/Basic13.tsx) |
| 기본값 | mergeProps | default props | [Basic14.tsx](src/components/Basic14.tsx) |

---

### 🔹 G. DOM / 스타일

| 항목 | API | 이유 | 참고 파일 |
|---|---|---|---|
| 클래스 | classList | 조건부 안전 | [Basic15.tsx](src/components/Basic15.tsx) |
| DOM 접근 | ref | SSR-safe | [Basic16.tsx](src/components/Basic16.tsx) |
| 이벤트 | inline handler | 자동 batch 처리 | [Basic9.tsx](src/components/Basic9.tsx) |


---


## 2. Solid 기준 SPA 설계 원칙

### 🔹 1. 컴포넌트 설계 기준

#### ❌ React식 사고
- state는 많아도 됨
- rerender 감안
- memo는 최적화 옵션

#### ⭕ Solid식 사고
- 상태는 최대한 쪼갠다
- rerender 개념이 없음
- memo는 기본 설계 도구

**원칙**  
> 컴포넌트 단위가 아니라  
> **데이터 단위로 반응성을 설계한다**

---

### 🔹 2. 상태 배치 전략

| 상태 유형 | 위치 |
|---|---|
| UI 토글 | 컴포넌트 내부 signal |
| 입력값 | signal / store |
| 리스트 | store + For |
| 서버 데이터 | resource |
| 전역 UI | context (최소화) |

---

### 🔹 3. SPA 페이지 구조 권장안

```text
/src
 ├─ routes
 │   ├─ list.tsx        // 페이지 (상태 소유)
 │   └─ detail.tsx
 ├─ components
 │   ├─ ListView.tsx    // 순수 UI
 │   └─ Item.tsx
 ├─ stores
 │   └─ listStore.ts    // createStore
 └─ services
     └─ api.ts          // fetcher
```

---

### 🔹 4. 데이터 흐름 규칙

**원칙**  
> 데이터는 항상 상위 → 하위로만 흐른다

- signal / memo / resource는 **값이 아닌 참조**로 전달한다
- props에서 `value()` 형태의 접근을 허용한다
- 하위 컴포넌트는 상태를 **소유하지 않고 소비만** 한다

```ts
const [checked, setChecked] = createSignal(false);

<Item checked={checked} />

function Item(props) {
  return <input checked={props.checked()} />;
}
```

---

### ❌ 금지 패턴

- React식 값 복사 전달
- props에서 signal을 다시 감싸는 행위
- 상위 상태를 하위 컴포넌트에서 재정의하는 구조

---

### 🔹 5. effect 사용 규칙 (중요)

Solid에서 effect는 **반응성의 기본 도구가 아니다**  
명확한 목적이 있을 때만 제한적으로 사용한다

| 목적 | 권장 API |
|---|---|
| DOM 접근 | `onMount` |
| 데이터 파생 | `createMemo` |
| 서버 요청 | `createResource` |
| 로그 / 외부 시스템 연동 | `createEffect` |

**운영 기준**

- `createEffect`는 최후 수단
- 값 계산에 effect를 사용했다면 설계 오류를 의심
- effect 내부에서 state를 다시 변경하는 패턴 지양

---

### 🔹 6. 성능 기준 (Solid 강점 활용)

- `<For>` 사용 시 `key` 불필요
- `createMemo` 비용은 사실상 무시 가능
- 상태를 상위로 끌어올리는 설계 지양
- `context`는 전역 UI 상태에만 최소 사용

**권장 방향**

> 성능 최적화는 옵션이 아니라  
> **초기 설계의 결과물**이어야 한다

---

### 🔹 7. Solid SPA 설계 체크리스트

- effect보다 memo를 먼저 고려했는가
- 조건 렌더링에 `&&`를 사용하지 않았는가
- 리스트 렌더링에 `map` 대신 `<For>`를 사용했는가
- props 구조 분해 시 반응성을 깨지 않았는가
- DOM 접근이 mount 이후에 이루어지는가
- 상태를 최소 단위로 분해했는가

---

### 🔹 8. 결론 (실무 기준)

Solid SPA 설계의 핵심

- 작은 API 집합
- 명확한 반응성 규칙
- 데이터 단위 중심 사고

**React 대비**

- 러닝 커브 ↓  
- 사고 전환 비용 ↑  

초기에는 불편하지만,  
규칙을 체화하면 **복잡도가 낮고 예측 가능한 SPA**를 지속적으로 구축할 수 있다.

---