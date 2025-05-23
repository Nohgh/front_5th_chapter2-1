### 배포 링크 🔗

https://nohgh.github.io/front_5th_chapter2-1/index.basic.html

## 과제 체크포인트

### 기본과제

- [x] 코드가 Prettier를 통해 일관된 포맷팅이 적용되어 있는가?
- [x] 적절한 줄바꿈과 주석을 사용하여 코드의 논리적 단위를 명확히 구분했는가?
- [x] 변수명과 함수명이 그 역할을 명확히 나타내며, 일관된 네이밍 규칙을 따르는가?
- [x] 매직 넘버와 문자열을 의미 있는 상수로 추출했는가?
- [x] 중복 코드를 제거하고 재사용 가능한 형태로 리팩토링했는가?
- [x] 함수가 단일 책임 원칙을 따르며, 한 가지 작업만 수행하는가?
- [x] 조건문과 반복문이 간결하고 명확한가? 복잡한 조건을 함수로 추출했는가?
- [x] 코드의 배치가 의존성과 실행 흐름에 따라 논리적으로 구성되어 있는가?
- [x] 연관된 코드를 의미 있는 함수나 모듈로 그룹화했는가?
- [x] ES6+ 문법을 활용하여 코드를 더 간결하고 명확하게 작성했는가?
- [x] 전역 상태와 부수 효과(side effects)를 최소화했는가?
- [ ] 에러 처리와 예외 상황을 명확히 고려하고 처리했는가?
- [x] 코드 자체가 자기 문서화되어 있어, 주석 없이도 의도를 파악할 수 있는가?
- [ ] 비즈니스 로직과 UI 로직이 적절히 분리되어 있는가?
- [ ] 코드의 각 부분이 테스트 가능하도록 구조화되어 있는가?
- [ ] 성능 개선을 위해 불필요한 연산이나 렌더링을 제거했는가?
- [ ] 새로운 기능 추가나 변경이 기존 코드에 미치는 영향을 최소화했는가?
- [x] 코드 리뷰를 통해 다른 개발자들의 피드백을 반영하고 개선했는가?
- [x] (핵심!) 리팩토링 시 기존 기능을 그대로 유지하면서 점진적으로 개선했는가?

### 심화과제

(구현완료하지 못하였습니다. 관련해서 밑에서 설명드리겠습니다!)

- [ ] 변경한 구조와 코드가 기존의 코드보다 가독성이 높고 이해하기 쉬운가?
- [ ] 변경한 구조와 코드가 기존의 코드보다 기능을 수정하거나 확장하기에 용이한가?
- [ ] 변경한 구조와 코드가 기존의 코드보다 테스트를 하기에 더 용이한가?
- [ ] 변경한 구조와 코드가 기존의 모든 기능은 그대로 유지했는가?
- [ ] (핵심!) 변경한 구조와 코드를 새로운 한번에 새로만들지 않고 점진적으로 개선했는가?

## 과제 셀프회고

<!-- 과제에 대한 회고를 작성해주세요 -->

### 과제를 하면서 내가 제일 신경 쓴 부분은 무엇인가요?

- 어떤 변수명과 함수명이 클린한 이름인가에 대해 고민하였습니다.
- 단일원칙을 지키는 함수를 만들기 위해 함수를 세분화하여 분리하는것에 집중하였습니다.

### 과제를 다시 해보면 더 잘 할 수 있었겠다 아쉬운 점이 있다면 무엇인가요?

멘토링시간 이후, 제가 작성한 코드에 대해 한번 더 고민할 수 있었고 1차적으로 리펙터링을 한 과정에 대해 스스로 피드백을 해보았습니다.
![image](https://github.com/user-attachments/assets/d4a54937-9c98-48a0-bd5b-58bc68030f9e)
해당 과정에서 기록한 내용을 정리해보자면 다음과 같습니다.

**1. 지금껏 진행한 코드가 진정한 클릭코드가 아니다. 라는 결론에 대한 이유**

- 어떤 목적으로 분리했는지 파악하기 힘들다

  - component, constants, events, promotion, stores, updater이라는  폴더명의 성질과 그 관계성을 생각해보면 쉽게 파악하기 힘듬을 직관적으로 알 수 있다.

- 하나의 로직이 파편화 되어있다
  - 코드 내 컨벤션이 동일하지 않다. 요소를 생성할 때 어떤 요소는 컴포넌트 폴더 내에서 BaseElement를 상속받아 생성하고, 어떤 요소는 요소를 호출하는 함수를 호출하여 생성하고 또 어떤 요소는 함수로 분리되지 않은체 element.id, element.class, element.textcontent 이런식으로 작성된다.

 

**2. 클린한 코드를 작성하지 못하게 된 이유를 생각해보자. (변명 x, 회고 o)**

- 과제를 시작하는 과정에서 어떤 계획을 세우고 차근차근 접근하지 않고 무턱대고 바로 개발에 들어갔다. 
- ai를 적절히 활용하지 못해 시간을 허비했다. 과제를 처음 시작할 때 로직을 이해하는 과정이 먼저 되어야 과제를 완벽히 할 수 있다는 판단에 주어진 더티코드를 AI를 활용하지 않고, 스스로의 힘으로 이해하였다. 해당 과정에서 꽤 많은 시간이 소요되었다.

- 한 파일에서 변수명, 함수명을 다시 짓고, 잘 작성하는 즉 전체적으로 좋은 구조를 만들기 보다는 각각의 파일에서의 클린코드에 집중하게 되었다.

- 중간중간 기록 및 회고를 통해 리펙터링을 잘하고 있는지 확인하는 과정을 거치지 않았다. 

**3.그렇다면, 클린코드를 작성하기 위해 어떻게 바꿔야 하는가.**

- 통일성이 있어야 한다. 로직이 흘러가는 흐름이나 컨벤션, 구조 모두 통일성이 있어야 한다.

- 각 파일 내부에서 클린코드는 물론, 전체적인 구조측면에서도 납득이 될만한 , 한 두개 정도 설명하면 다른 곳에서도 이렇겠구나. 하는 컨벤션이 작성되어야 한다.

- 파편화된 코드를 모아야한다. 지금은 한 로직에 사용되는 함수들이 흩어져 있는데 이를 모을 필요성이 있다.

- 비교적 컨벤션이 통일된다고 생각하는 리액트의 폴더구조에서 힌트를 얻어보자.

### 멘토링과 1차 회고 이후 진행사항

- 기존의 basic코드는 다시 리펙터링이 되어야 한다고 생각하였습니다.

- 멘토링에서 코치님이 짚어주신대로 advanced에서는 리액트를 사용하며 그동안 사용해왔던 폴더 구분방식이나 파일의 구조가 꽤 정돈되어 있다라고 하셨던것을 생각하여, 더티코드를 클린코드로 리펙터링 하는데 있어서 리액트와 타입스크립트로 먼저 마이그레이션을 하는 것이 현재 작성한 코드를 다시 깔끔하게 구성하는것에 도움이 될 것이라는 판단을 하였습니다.

- 기존의 advanced는 기존의 엉망인 basic코드를 토대로 구현하였습니다.
  그러한 기존의 advanced코드를 다시 작성하는것이 더 낫다고 생각하였고, 시간 관계상 ai의 도움을 받아 마이그레이션을 진행하고자 하였습니다.

- 또한 ai가 처음 주어진 더티코드를 어떻게 리액트와 타입스크립트로 마이그레이션을 하는지 각 과정을 살펴보고 싶었습니다.
  항해를 진행하며 ai사용을 지양하자 마음을 먹었었기에 지금까지 과제를 진행하면서 가장 ai를 많이 활용하지 않았나 싶습니다.

- ai의 도움을 받아 기능을 완벽히 수행하는 리액트, 타입스크립트를 작성하였습니다.
  ai와 함께 작성한 전체적인 구조는 다음과 같습니다.

```
advanced/
├── components/
│   ├── CartItemComponent.tsx
│   ├── CartList.tsx
│   ├── CartSummary.tsx
│   ├── ItemSelector.tsx
│   └── StockState.tsx
├── hooks/
│   ├── useCart.ts
│   ├── useCartAction.ts
│   ├── useCartCalculate.ts
│   ├── useItemSelection.ts
│   ├── usePromotion.ts
│   └── useStock.ts
├── types/
│   └── index.ts
├── App.tsx
└── main.advanced.tsx
```

- 아직 완벽히 리펙터링을 진행하지는 못하였지만, 최종 산출물이라 볼 수 있는 리액트,타입스크립트로 구현된 클린코드를 토대로 vanila js로 리펙터링될 코드의 전체적인 구조에 대한 힌트를 얻게 되었습니다.

- ai를 사용하여 마이그레이션을 진행하며, 발제를 해주실 때 말씀하셨던 `ai를 조금씩 활용해보자` 를 지키지 못하고 ai의 비중이 꽤 크게 들어간 코드를 작성했기에 심화과제의 리액트 타입스크립트 코드는 지운상태로 올려두었습니다. (삭제하기 전 커밋에서는 ai를 활용한 코드를 남겨두었습니다. + 개인적으로 백업 진행하였습니다.)

### 앞으로의 목표

- 깔끔히 작성된 advanced에서 힌트를 받아 basic 코드를 다시 작성하는것이 목표입니다.

## 리뷰 받고 싶은 내용이나 궁금한 것에 대한 질문 편하게 남겨주세요 :)

![image](https://github.com/user-attachments/assets/b77e34bf-591a-4daa-9415-f9c1b1d9d103)

1.  위의 코드는 **장바구니를 업데이트**하는 코드입니다.

구체적으로, 할인율을 토대로 장바구니를 업데이트하고 재고,포인트 역시 업데이트하는 역할을 수행합니다.

전체적으로 보았을 때 장바구니의 상태에 따른 로직이기 때문에 updateCart라고 함수명을 지었는데, 단순히 장바구니의 UI만 변경하는 것이 아니라 다른 기능도 수행하기에 해당 **함수명(updateCart)가 적합한지 궁금합니다.**

ai한테 물어본 결과로는 syncCartState, processCartUpdate, applyCartChanges 등과 같은 함수명을 추천해주었지만,
요게 적합하다!라는 함수명은 딱히 아닌것 같다고 생각하였습니다.
(그 이유를 자세히 설명드리고 싶은데 명확히 설명하기에는 어려운것 같습니다..)
