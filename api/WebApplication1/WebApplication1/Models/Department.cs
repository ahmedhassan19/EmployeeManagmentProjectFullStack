using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagment.Models
{
    public class Department
    {
        [Required(ErrorMessage = "DepartmentId is required")]
        public int DepartmentId { get; set; }
        [Required(ErrorMessage = "DepartmentName is required")]
        public string DepartmentName { get; set; }
    }
}
