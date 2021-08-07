const employee={template:`
<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Add Employee
</button>

<table class="table table-striped">

<thead>
    <tr>
        <th>
                
        <div class="d-flex flex-row">

        <input class="form-control m-2"
            v-model="EmployeeIdFilter"
            v-on:keyup="FilterFn()"
            placeholder="Filter">

            <button type="button" class="btn btn-light"
            @click="sortResult('EmployeeId',true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
            </svg>
            </button>

            <button type="button" class="btn btn-light"
            @click="sortResult('EmployeeId',false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </button>
        </div>
        EmployeeId
        </th>
        <th>

        <div class="d-flex flex-row">

        <input class="form-control m-2"
            v-model="EmployeeNameFilter"
            v-on:keyup="FilterFn()"
            placeholder="Filter">
            
            <button type="button" class="btn btn-light"
            @click="sortResult('EmployeeName',true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
            </svg>
            </button>

            <button type="button" class="btn btn-light"
            @click="sortResult('EmployeeName',false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </button>

        </div>
        EmployeeName
       </th>
        <th>
            Department
        </th>
        <th>
            Hiring Date
        </th>
        <th>
            Birthdate
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="emp in employees">
        <td>{{emp.EmployeeId}}</td>
        <td>{{emp.EmployeeName}}</td>
        <td>{{emp.Department}}</td>
        <td>{{emp.HiringDate}}</td>
        <td>{{emp.Birthdate}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(emp)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(emp.EmployeeId)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

        </td>
    </tr>
</tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">


            <div class="input-group mb-3" v-if="modalTitle=='Edit Employee'">
                <span class="input-group-text">Id</span>
                <input type="text" class="form-control" v-model="EmployeeId" readonly>
               
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Name</span>
                <input type="text" class="form-control" v-model="EmployeeName">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Department</span>
                <select class="form-select" v-model="Department">
                    <option v-for="dep in departments">
                    {{dep.DepartmentName}}
                    </option>
                </select>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Hiring Date</span>
                <input type="date" class="form-control" v-model="HiringDate">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Birthday</span>
                <input type="date" class="form-control" v-model="Birthdate">
            </div>
            <button type="button" @click="createClick()"
            v-if="modalTitle=='Add Employee'" class="btn btn-primary" :disabled="!validateModal()">
            Create
            </button>
            <button type="button" @click="updateClick()"
            v-if="modalTitle=='Edit Employee'" class="btn btn-primary" :disabled="!validateModal()"> 
            Update
            </button>
            <span>The fields that end with * are required field</span>
    </div>

</div>
</div>
</div>



</div>


`,

data(){
    return{
        departments:[],
        employees:[],
        modalTitle:"",
        EmployeeId:0,
        EmployeeName:"",
        Department:"",
        HiringDate:"",
        Birthdate:"",
        EmployeeNameFilter:"",
        EmployeeIdFilter:"",
        employeesWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"employee")
        .then((response)=>{
           
            for (var i = 0; i <response.data.length; i++) {
                  response.data[i].HiringDate = new Date(response.data[i].HiringDate).toISOString().split('T')[0]
                  response.data[i].Birthdate = new Date(response.data[i].Birthdate).toISOString().split('T')[0]    
            }
            this.employees=response.data;
            this.employeesWithoutFilter=response.data;
        });

        axios.get(variables.API_URL+"department")
        .then((response)=>{
            this.departments=response.data;
        });
    },
    validateModal() {
        return !!this.EmployeeName && !!this.Department && !!this.HiringDate && !!this.Birthdate
     },
    addClick(){
        this.modalTitle="Add Employee";
        this.EmployeeId=0;
        this.EmployeeName="";
        this.Department="",
        this.HiringDate="",
        this.Birthdate=""
    },
    editClick(emp){
        this.modalTitle="Edit Employee";
        this.EmployeeId=emp.EmployeeId;
        this.EmployeeName=emp.EmployeeName;
        this.Department=emp.Department,
        this.HiringDate=emp.HiringDate,
        this.Birthdate=emp.Birthdate
    },
    createClick(){
        axios.post(variables.API_URL+"employee",{
            EmployeeName:this.EmployeeName,
            Department:this.Department,
            HiringDate:this.HiringDate,
            Birthdate:this.Birthdate
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"employee",{
            EmployeeId:this.EmployeeId,
            EmployeeName:this.EmployeeName,
            Department:this.Department,
            HiringDate:this.HiringDate,
            Birthdate:this.Birthdate
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"employee/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    FilterFn(){
        var EmployeeNameFilter=this.EmployeeNameFilter;
        var EmployeeIdFilter = this.EmployeeIdFilter;

        this.employees=this.employeesWithoutFilter.filter(
            function(el){
                return el.EmployeeId.toString().toLowerCase().includes(
                    EmployeeIdFilter.toString().trim().toLowerCase()
                )&&
                el.EmployeeName.toString().toLowerCase().includes(
                    EmployeeNameFilter.toString().trim().toLowerCase()
                )
            });
    },
    sortResult(prop,asc){
        this.employees=this.employeesWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        })
    }

},

mounted:function(){
    this.refreshData();
}

}