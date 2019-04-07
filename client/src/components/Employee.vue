<template>

<div>

    <h2>Edit Employee</h2>

<form>
    <div class="form-group">

        <p>Employee ID {{ id }}</p>

        <label for="employeeName">Employee Name</label>    
        <input id="employeeName" class="form-control" v-model.trim="employee.name">

        <button class="btn btn-primary mt-3 mr-3"  v-on:click="employeeFormSubmit">Update</button>
        <button class="btn btn-outline-secondary mt-3" v-on:click="cancel">Cancel</button>

    </div></form>

    <div>
        <h3>Laptops</h3>

        <h4 v-if="laptops.length == 0">{{ employee.name }} has no laptops assigned.</h4>
        <ul v-else>
            <li v-for="laptop in laptops" v-bind:key="laptop.id">ID {{ laptop.id }}: {{ laptop.brand }} {{ laptop.model }} with serial number {{ laptop.serialNumber}} </li>        
        </ul>
    
        <router-link to="/laptops">Assign laptops on the Laptop Management page</router-link>
    </div>
    
    <hr>

    <button class="btn btn-danger mt-3 mr-5" v-on:click="deleteEmployee">Delete</button>

</div>
</template>

<script>

export default {
    name: "Employee",
    data() {
        return {
            id: '',
            employee: {},
            disabled: true,
            laptops: []
        }
    },
    mounted() {

        console.log(this.$route.params)
        this.id = this.$route.params.id

        this.$services.employees.getEmployee(this.id).then(data => {
            this.employee = data 
            this.disabled = false 

            this.$services.employees.getEmployeeLaptops(this.id).then(data => {
                this.laptops = data 
            })
        })
    },
    methods:{
        employeeFormSubmit() {
            if (!this.employee.name) { 
                alert('Enter a name')
                return 
            }
            this.$services.employees.updateEmployee( {id: this.id, name: this.employee.name }).then( data => {
                this.$router.push('/employees')
            })
        },
        cancel() {
            this.$router.push('/employees')
        },
        deleteEmployee() {
            if (confirm(`Delete ${this.employee.name}?`))
            this.$services.employees.deleteEmployee(this.id).then( () => {
                this.$router.push('/employees')            
            })
        }
    }
}

</script>

<style>
</style>