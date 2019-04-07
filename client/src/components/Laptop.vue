<template>
<div>

    <div class="form-group">

        <p>Laptop ID {{ laptop.id }}</p>

        <label for="laptopBrand">Brand</label>    
        <input id="laptopBrand" class="form-control" required v-model.trim="laptop.brand">

        <label for="laptopModel">Model</label>    
        <input id="laptopNodel" class="form-control" required v-model.trim="laptop.model">

        <label for="laptopSerialNumber">Serial Number</label>    
        <input id="laptopSerialNumber" class="form-control" required v-model.trim="laptop.serialNumber">

        <button class="btn btn-primary mt-3 mr-4" v-on:click="laptopFormSubmit">Edit</button>
        <button class="btn btn-outline-secondary mt-3" v-on:click="cancel">Cancel</button>

        <h2 v-if="laptop.employeeId">This laptop is assigned to employee # {{ laptop.employeeId }} </h2>
        <h2 v-else>This laptop is not assigned to an employee </h2>

        <select v-model="selectedEmployee">
            <option v-for="employee in employees" v-bind:value="employee.id" v-bind:key="employee.id">{{employee.id}} {{ employee.name }}</option>
        </select>   

        <br>
        <button class="btn btn-primary" v-on:click="updateEmployee">Change employee</button>
        <br>
        <button class="btn btn-primary" v-on:click="unassign">Unassign Laptop</button>

        <hr>
        <button class="btn btn-danger" v-on:click="deleteLaptop">Delete</button>
    
    </div>
</div>
</template>

<script>

const CREATE = 'Create New Laptop'
const EDIT = 'Edit Laptop'

export default {
    name: "Laptop",
    data() {
        return {
            laptop: {},
            employees: [],
            selectedEmployee: {}
        }
    },
    mounted() {

        this.id = this.$route.params.id
        this.loadData()

    },
    methods:{
        loadData() {
        this.$services.laptops.getLaptop(this.id).then(data => {
            console.log(data)
            this.laptop = data 

            this.$services.employees.getAllEmployees().then(data => {
                this.employees = data 
                console.log(this.laptop)
                    this.selectedEmployee = this.laptop.employeeId
            })
            
        })
    
        },
        laptopFormSubmit() {
            if (!this.laptop.brand || !this.laptop.model || !this.laptop.serialNumber) { 
                alert('Enter the brand, model, and serial number.')
                return 
            }

            this.$services.laptops.updateLaptop( this.laptop ).then( data => {
                this.$router.push('/laptops')
            })
        
        },
        cancel() {
                this.$router.push('/laptops')
        },
        updateEmployee() {
            if (!this.selectedEmployee) { 
                alert('Select an employee') 
                return
            }
            console.log(this.selectedEmployee)
            this.$services.laptops.assignLaptop(this.laptop.id, this.selectedEmployee).then( data => {
                this.loadData()
            }) 
        },
        unassign() {
            this.$services.laptops.assignLaptop(this.laptop.id, null).then(data => {
                this.loadData()
            })
        },
        deleteLaptop() {

            if (confirm(`Delete laptop with serial number ${this.laptop.serialNumber}? `)) {

            this.$services.laptops.deleteLaptop(this.laptop.id).then( () => {
                this.$router.push('/laptops')
            })
            }
        }
    }
}

</script>

<style>
</style>