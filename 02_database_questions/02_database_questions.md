# Database Questions

## Level 1 (Novice - Expected Task Time: 1 minute):

Write a SQL query that shows me how many customers there are from Germany.

```sql
SELECT COUNT(customerID) as GermansCount FROM Customers where Country='Germany';
```

## Level 2 (Business Admin - Expected Task Time <4 minutes):

Write a query that shows me a list of the countries that have the most customers; from most customers to least customers. Don’t show countries that have less than 5 customers.

```sql
SELECT COUNT(CustomerID) AS CustomerCount, Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY COUNT(CustomerID) DESC;
```

## Level 3 (Average Developer - Expected Task Time <8 minutes):

Reverse Engineer These Results (tell me the query that we need to write to get these results):

```sql
SELECT
    a.CustomerName,
    b.OrderCount,
    b.FirstOrder,
    b.LastOrder
FROM Customers a
INNER JOIN (
    SELECT
        CustomerID,
        COUNT(*) AS OrderCount,
        MIN(OrderDate) AS FirstOrder,
        MAX(OrderDate) AS LastOrder
    FROM Orders
    GROUP BY CustomerID
) b ON a.CustomerID = b.CustomerID;
```
