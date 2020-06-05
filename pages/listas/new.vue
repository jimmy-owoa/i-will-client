<template>
  <div>
    <list-form :selectedList="list" action="post" />
  </div>
</template>

<script>
import ListForm from '@/components/lists/ListForm';

export default {
  components: {
    ListForm
  },
  data() {
    return {
      list: {
        name: '',
        code: '',
        description: '',
        start_date: new Date().toISOString().substr(0, 10),
        end_date: new Date().toISOString().substr(0, 10),
        start_time: '',
        end_time: '',
        user_id: 1,
        tasks: []
      },
    }
  },
}
</script>

