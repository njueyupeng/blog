---
title: sql-常用语句汇总
date: 2019-05-23 19:24:41
tags: sql
categories: 数据库
---

**简介：**本文列举常用 sql 语句方便后续学习和回顾

<!--more-->

## 常用语句

```sql

1. SELECT * FROM tableName

2. SELECT name, age FROM Persons

3. SELECT DISTINCT  列名称 FROM 表名称

4. SELECT 列名称 FROM 表名称 WHERE 列 运算符 值

-- SQL 使用单引号来环绕文本值（大部分数据库系统也接受双引号）。如果是数值，请不要使用引号。
5. SELECT * FROM Persons WHERE City='Beijing'

6. SELECT * FROM Persons WHERE FirstName='Thomas' AND LastName='Carter'

7. SELECT * FROM Persons WHERE firstname='Thomas' OR lastname='Carter'


8. SELECT * FROM Persons WHERE (FirstName='Thomas' OR FirstName='William') AND LastName='Carter'

-- ORDER BY 语句默认按照升序对记录进行排序。
9. SELECT Company, OrderNumber FROM Orders ORDER BY Company

-- 以字母顺序显示公司名称（Company），并以数字顺序显示顺序号（OrderNumber）
10. SELECT Company, OrderNumber FROM Orders ORDER BY Company, OrderNumber

-- 以逆字母顺序显示公司名称
11. SELECT Company, OrderNumber FROM Orders ORDER BY Company DESC

-- 以逆字母顺序显示公司名称，并以数字顺序显示顺序号
12. SELECT Company, OrderNumber FROM Orders ORDER BY Company DESC, OrderNumber ASC

-- INSERT INTO 语句用于向表格中插入新的行
13. INSERT INTO 表名称 VALUES (值1, 值2,....)

14. INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)

15. INSERT INTO Persons VALUES ('Gates', 'Bill', 'Xuanwumen 10', 'Beijing')

16. INSERT INTO Persons (LastName, Address) VALUES ('Wilson', 'Champs-Elysees')

-- Update 语句用于修改表中的数据
17. UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值

18. UPDATE Person SET FirstName = 'Fred' WHERE LastName = 'Wilson'

-- 更新某一行中的若干列
19. UPDATE Person SET Address = 'Zhongshan 23', City = 'Nanjing' WHERE LastName = 'Wilson'

-- DELETE 语句用于删除表中的行
20. DELETE FROM 表名称 WHERE 列名称 = 值

21. DELETE FROM Person WHERE LastName = 'Wilson'

--  可以在不删除表的情况下删除所有的行。这意味着表的结构、属性和索引都是完整的
22. DELETE FROM table_name

-- 或者
23. DELETE * FROM table_name

24. SELECT column_name(s)
    FROM table_name
    LIMIT number

25. SELECT *
    FROM Persons
    LIMIT 5

26. SELECT column_name(s)
    FROM table_name
    WHERE column_name LIKE pattern

27. SELECT * FROM Persons
    WHERE City LIKE 'N%'

28. SELECT * FROM Persons
    WHERE City LIKE '%g'

29. SELECT * FROM Persons
    WHERE City LIKE '%lon%'

30. SELECT * FROM Persons
    WHERE City NOT LIKE '%lon%'

31. SELECT * FROM Persons
    WHERE FirstName LIKE '_eorge'

32. SELECT * FROM Persons
    WHERE LastName LIKE 'C_r_er'

-- 现在，我们希望从上面的 "Persons" 表中选取居住的城市以 "A" 或 "L" 或 "N" 开头的人
33. SELECT * FROM Persons WHERE City LIKE '[ALN]%'

-- 我们希望从上面的 "Persons" 表中选取居住的城市不以 "A" 或 "L" 或 "N" 开头的人
34. SELECT * FROM Persons WHERE City LIKE '[!ALN]%'

-- IN 操作符允许我们在 WHERE 子句中规定多个值
35. SELECT column_name(s)
    FROM table_name
    WHERE column_name IN (value1,value2,...)

-- 我们希望从上表中选取姓氏为 Adams 和 Carter 的人
36.SELECT * FROM Persons WHERE LastName IN ('Adams','Carter')
```

## 操作符

| 操作符  | 描述         |
| ------- | ------------ |
| =       | 等于         |
| <>      | 不等于       |
| >       | 大于         |
| <       | 小于         |
| >=      | 大于等于     |
| <=      | 小于等于     |
| BETWEEN | 在某个范围   |
| LIKE    | 搜索某种模式 |

## 通配符

| 通配符                     | 描述                       |
| -------------------------- | -------------------------- |
| %                          | 替代一个或多个字符         |
| \_                         | 仅替代一个字符             |
| [charlist]                 | 字符列中的任何单一字符     |
| [^charlist]或者[!charlist] | 不在字符列中的任何单一字符 |
