# InputMoney
> Visual studio code: Ctrl+Shift+V

### Import component

```html
<InputMoney ref="SFInputMoneyRef"
              @getValue="getMoneyVal"
              :placeholder="'Số tiền'"
              :suffix="'VNĐ'"
              :maxLength="14"
              :disabled="true"
              :error="true"
              :showText="true">
</InputMoney>
```

```typescript
import InputMoney from "@/components/Shared/InputMoney/SFInputMoney.vue";
```

### Get value input

```typescript
const getMoneyVal = (val) => {
    console.log(val);
}
```

### Set value input

```typescript
const InputMoneyRef = ref<null | { setInput: (val) => null }>(null)
const setInputMoneyVal = (val) => {
    InputMoneyRef.value?.setInput(val)
}

return {
    InputMoneyRef
}
```

### Variables binding

| ATTRIBUTE   | DESCRIPTION                 | REQUIRED |  TYPE   | ACCEPTED VALUES | DEFAULT |
|:------------|:----------------------------|:--------:|:-------:|----------------:|--------:|
| placeholder | placeholder of input        |          | String  |       'Số tiền' |   empty |
| suffix      | suffix of input             |          | String  |           'VNĐ' |   empty |
| maxLength   | maxlength of input          |          | Number  |              14 |   empty |
| showText    | show convert number to text |          | Boolean |      true/false |   false |
| disabled    | disable input               |          | Boolean |      true/false |   false |
| error       | error style input           |          | Boolean |      true/false |   empty |