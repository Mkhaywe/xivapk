<script>
/**
 * Starter component
 */
export default {
    head() {
        return {
            title: `${this.title} Xiva Solutions `
        }
    },
    data() {
        return {
            title: 'Starter',
            items: [{
                    text: 'Xiva Solutions ',
                    href: '/',
                },
                {
                    text: 'Pages',
                    href: '/',
                },
                {
                    text: 'Starter',
                    active: true,
                },
            ],
        }
    },
    middleware: 'router-auth'
}
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
</div>
</template>
