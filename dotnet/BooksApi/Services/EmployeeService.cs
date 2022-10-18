using BooksApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace BooksApi.Services
{
    public class EmployeeService
    {
        private readonly IMongoCollection<Employee> _employees;

        public EmployeeService(EmployeeListDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _employees = database.GetCollection<Employee>(settings.EmployeeCollectionName);
        }

        public List<Employee> Get() =>
            _employees.Find(employee => true).ToList();

        public Employee Get(string id) =>
            _employees.Find<Employee>(employee => employee.Id == id).FirstOrDefault();

        public Employee Create(Employee employee)
        {
            _employees.InsertOne(employee);
            return employee;
        }

        public void Update(string id, Employee employeeIn) =>
            _employees.ReplaceOne(employee => employee.Id == id, employeeIn);

        public void Remove(Employee employeeIn) =>
            _employees.DeleteOne(employee => employee.Id == employeeIn.Id);

        public void Remove(string id) => 
            _employees.DeleteOne(employee => employee.Id == id);
    }
}