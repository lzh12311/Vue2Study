<template>
    <div>
        <li> id: {{ id }}</li>
        <li> title: {{ title }}</li>

    </div>
</template>
<script>
export default {

    name: 'Detail',
    props: ['id', 'title'],

}

</script>