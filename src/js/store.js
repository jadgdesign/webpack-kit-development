import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activateCardNumber: true, // Aparece el contenedor de las cartas

    showModePlay: 'Single', // Modelo de juego para las cartas

    numberTypeCard: 4, // Las cantidas de cartas por Fila

    countClickCard: 0, // Contador de click de las cartas

    previousTarget: null, // Target de la Carta

    firstNameCard: null, // Valor de la primera carta seleccionada
    secondNameCard: null, // Valor de la segunda carta seleccionada

    moventClickCard: 0, // Contador de movimientos para el modo de juego 'Single'

    namePlayerCard: 'One Player',
    pointsOnePlayerCard: 0, // Puntos para el Primer Jugador
    pointsTwoPlayerCard: 0, // Puntos para el Segundo Jugador

    pointsWinner: 0 // Contador para validar si ha sido completado el Memory Card
  },
  mutations: {
    MoreCountClick(state, value) {
      if (value === '0') state.countClickCard = 0;
      else if (value === '++') state.countClickCard++;
      else state.countClickCard--;
    },
    MoventCard(state) {
      state.moventClickCard++;
    },
    PointsDoubleCard(state, name) {
      (name === 'One Player') ? state.pointsOnePlayerCard++ : state.pointsTwoPlayerCard++;
    },
    MorePointsWinner(state) {
      state.pointsWinner++;
    },
    ResetValueStore(state) {
      state.countClickCard = 0;
      state.moventClickCard = 0;

      state.moventClickCard = 0;

      state.namePlayerCard = 'One Player';
      state.pointsOnePlayerCard = 0;
      state.pointsTwoPlayerCard = 0;

      state.pointsWinner = 0;
    }
  }
});