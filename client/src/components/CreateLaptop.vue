<template>

<div>

    <div class="form-group">

        <label for="laptopBrand">Brand</label>    
        <input id="laptopBrand" class="form-control" required v-model.trim="brand">

        <label for="laptopModel">Model</label>    
        <input id="laptopNodel" class="form-control" required v-model.trim="model">

        <label for="laptopSerialNumber">Serial Number</label>    
        <input id="laptopSerialNumber" class="form-control" required v-model.trim="serialNumber">

        <button class="btn btn-primary mt-3 mr-4" v-on:click="laptopFormSubmit">Create</button>
        <button class="btn btn-outline-secondary mt-3" v-on:click="cancel">Cancel</button>

    </div>
</div>
</template>

<script>

export default {
    name: 'CreateLaptop',
    data() {
        return {
            brand: '',
            model: '',
            serialNumber: ''
        }
    },
    methods:{
        laptopFormSubmit() {
            if (!this.brand || !this.model || !this.serialNumber) { 
                alert('Enter the brand, model and serial number.')
                return 
            }

            this.$services.laptops.addLaptop( { brand: this.brand, model: this.model, serialNumber: this.serialNumber }).then( data => {
                this.$router.push('/laptops')
            }).catch( err => {
                console.error(err)
                alert('Error creating laptop.')
            })
            
        },
        cancel() {
            this.$router.push('/laptops')
        }
    }
}

</script>

<style>
</style>