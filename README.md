<br/>

<h1>API Usage</h1>
<br/>

## TDAmeritrade API Endpoints

## <br/>

---

### 1. Get stock details

## <br/>

**PARAMS**

- `symbol: string`

```javascript
`http://localhost:3000/td-stock?symbol=TSLA`;
```


---

## <br/>
### 2. Get movers

## <br/>

**NO PARAMS**

## <br/>

```javascript
`http://localhost:3000/td-movers`;
```

---

## <br/>
### 3. Get stock price history

## <br/>

**PARAMS**

- `symbol: string`
- `frequencyType: number`
- `periodType: string`
- `start: string`
- `end: string`
- `frequency: string`
- `needExtendedHoursData: boolean`

## <br/>

```javascript
`http://localhost:3000/td-prices?symbol=bbig&frequencyType=minute&periodType=day&start=10/05/2021,%207:00:00%20AM&end=10/11/2021,%205:00:00%20PM&frequency=1&needExtendedHoursData=true`;
```
---

## <br/>
### 4. Get fundamentals

## <br/>
**PARAMS**

- `symbol: string`
## <br/>

```javascript
`http://localhost:3000/td-fundamentals?symbol=TSLA`;
```
---
