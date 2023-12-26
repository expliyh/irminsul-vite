<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
    to: {
        type: String,
        required: true
    }
});

const router = useRouter();

const navigate = () => {
    router.push(props.to);
};

navigate()
</script>

<template>
    自动跳转中，请稍候……
</template>
