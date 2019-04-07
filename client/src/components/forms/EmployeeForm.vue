<template>
<div>

    <form>
    <div class="form-group">

        <label for="employeeName">Employee Name</label>    
        <input id="employeeName" class="form-control" v-model.trim="name">

        <button class="btn btn-primary mt-3 mr-5" v-on:click="employeeFormSubmit">Create</button>
        <button class="btn btn-outline-secondary mt-3"  v-on:click="cancel">Cancel</button>

    </div>
    </form>
</div>
</template>

<script>

export default {
    name: 'CreateEmployee',
    data() {
        return {
            name: '',     
        }
    },
    methods: {
        employeeFormSubmit() {
            if (!this.name) { 
                alert('Enter a name')
                return 
            }

            this.$emit('employeeFormSubmit', { name: this.name })
        },
        cancel() {
            this.$router.push('/employees')
        }
    }
}

</script>

<style>
</style>