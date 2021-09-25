<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light.position
    .container-fluid
      b-row.max-width

        b-col.col-xs-4.col-md-4.col-lg-3
          div
            img(src="../../src/assets/img/logo.png")

        b-col.col-xs-4.col-sm-3.col-md-4(style='display: flex; align-items: center;')
          .input-group
            .input-group-prepend
              button.btn.button-search(type='button')
                b-icon.font-defaul-size(icon='search')
            input.form-control.input-search(type='text' placeholder='Procure por uma tela')

        b-col.col-xs-5(style='display: flex; justify-content: flex-end;')
          b-row.line-icons-actions
            b-col.icon-actions
              .h3.mb-0
                b-icon-bell
            b-col.icon-actions
              .h3.mb-0
                b-icon-question-circle
            b-col.icon-actions
              b-iconstack(font-scale="2")
                b-icon(stacked='' icon='square')
                b-icon(stacked='' icon='dot' shift-h='-3' shift-v='4')
                b-icon(stacked='' icon='dot' shift-h='-3')
                b-icon(stacked='' icon='dot' shift-h='-3' shift-v='-4')
                b-icon(stacked='' icon='dot' shift-h='3' shift-v='4')
                b-icon(stacked='' icon='dot' shift-h='3')
                b-icon(stacked='' icon='dot' shift-h='3' shift-v='-4')
            b-col.icon-actions
              b-avatar(src='../../src/assets/img/logo.png' style='min-width:60px')

</template>

<script>
export default {

  name: 'Navbar',
  props: {},

};
</script>

<style lang="css" scoped>

  .completeNavBar {
    width: 100%;
  }

  img {
    width: 180px;
    margin: 15px 50px 10px 50px;
  }

  .icon-actions {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .font-defaul-size {
    font-size:30px !important;
    cursor: pointer;
    border: none;
  }

  .line-icons-actions {
    display: flex;
    justify-content: flex-end;
    margin-top:12px
  }

  .input-search {
    background-color: #f1f4ff;
    border:none;
    width: 400px;
    border-bottom-right-radius: 18px;
    border-top-right-radius: 18px;
  }

  .button-search {
    color:#777777;
    background-color: #f1f4ff;
    border-bottom-left-radius: 18px;
    border-top-left-radius: 18px
  }

  .position {
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
</style>
