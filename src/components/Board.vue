<template>
  <div id="board">
    <movable
      v-for="note in notes"
      :key="note.id"
      class="move"
      :posTop="note.x"
      :posLeft="note.y"
      :style="{
        'background-color': note.color,
        color: getTextColor(note.color),
      }"
    >
      <span>{{ note.content }}</span>
    </movable>

    <!-- <button type="button" @click="addStickyNote" class="button-add-sticky">
      <mdicon name="plus" />
    </button>
    <Modal /> -->
  </div>
</template>

<script>
// import Modal from "./Modal";

export default {
  name: "Board",
  components: {
    // Modal,
  },
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    addStickyNote() {
      this.$refs.modal.showModal();
    },
    getTextColor(e) {
      var c = e.substring(1); // strip #
      var rgb = parseInt(c, 16); // convert rrggbb to decimal
      var r = (rgb >> 16) & 0xff; // extract red
      var g = (rgb >> 8) & 0xff; // extract green
      var b = (rgb >> 0) & 0xff; // extract blue

      var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

      if (luma < 60) {
        return "#fff";
      } else {
        return "#000";
      }
    },
  },
  mounted() {
    this.$http
      .get("https://api.mockaroo.com/api/8352bfd0?count=1000&key=5f5763a0")
      .then((res) => {
        console.log(res);
        this.notes = res.data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#board {
  background-color: rgba(240, 240, 240, 1);
  height: 100vh;
  width: 100vw;
}

.move {
  display: block;
  position: absolute;
  top: 0;
  width: 500px;
  background: #fffd75;
  padding: 20px;
  color: #000;
  box-shadow: 5px 5px 10px -2px rgb(33 33 33 / 30%);
}

.button-add-sticky {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  bottom: 25px;
  right: 25px;
}
</style>
