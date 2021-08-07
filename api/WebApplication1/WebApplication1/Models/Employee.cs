using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagment.Models
{
    public class Employee
    {
        [Required(ErrorMessage = "EmployeeId is required")]
        public int EmployeeId { get; set; }
        [Required(ErrorMessage = "EmployeeName is required")]
        public string EmployeeName { get; set;}
        [Required(ErrorMessage = "Department is required")]
        public string Department { get; set; }
        [Required(ErrorMessage = "HiringDate is required")]
        public string HiringDate { get; set; }
        [Required(ErrorMessage = "Birthdate is required")]
        public string Birthdate { get; set; }


        
    }
}
