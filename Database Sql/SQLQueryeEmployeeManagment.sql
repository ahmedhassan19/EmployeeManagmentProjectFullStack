create database EmployeeManagment;
create table dbo.Department (
DepartmentId int  NOT NULL PRIMARY KEY identity(1,1) ,
DepartmentName nvarchar(500)
)

insert into dbo.Department values ('IT')
insert into dbo.Department values ('CS')
insert into dbo.Department values ('Support')




create table dbo.Employee (
EmployeeId int NOT NULL PRIMARY KEY identity(1,1),
EmployeeName nvarchar(500),
Department nvarchar(500),
Birthdate datetime,
HiringDate datetime
)

insert into dbo.Employee values ('Ahmed Hassan','IT',getdate(),GETDATE())


select * from dbo.Department
select * from dbo.Employee


