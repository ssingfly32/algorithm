-- 코드를 입력하세요
SELECT F.FLAVOR FROM FIRST_HALF F INNER JOIN ICECREAM_INFO I ON F.FLAVOR = I.FLAVOR WHERE I.INGREDIENT_TYPE = 'FRUIT_BASED' AND F.TOTAL_ORDER > 3000; 