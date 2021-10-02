$(function () {
  $('#form-total').steps({
    headerTag: 'h2',
    bodyTag: 'section',
    transitionEffect: 'fade',
    enableAllSteps: true,
    autoFocus: true,
    transitionEffectSpeed: 500,
    titleTemplate: '<div class="title">#title#</div>',
    labels: { previous: 'Back', next: 'Next', done: 'Confirm', current: '' },
    onStepChanging: function (event, currentIndex, newIndex) {
      return true;
    },
  });
});
