/* Istruzioni:
Create una todo list usando VueJS.
Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
Se non sapere che fare, di seguito trovate uno screenshot.
Funzionalitá:
La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri. */

//La nostra todo list avrá alcune tasks di default predefinite


let taskList = new Vue({
  el:'#todoapp',
  data:{
    tasks: [
      {
        index: 1,
        taskName: "Ricordati di pushare1",
        completionStatus: false,
      },
      {
        index: 2,
        taskName: "Ricordati di pushare2",
        completionStatus: false,
      },
      {
        index: 3,
        taskName: "Cambia messaggio di tanto in tanto",
        completionStatus: false,
      },
      {
        index: 4,
        taskName: "Commenta il codice",
        completionStatus: false,
      },
    ],
    newTask: "",
    completedTasks:[],
  },
  methods: {
    addTask: function(){
      //con il condizionela evito stringhe vuote - si potrebbe provare ad attivare la condizione di error del tag input
      if (this.newTask.length >= 4) {
        this.tasks.push({
          index:this.newTask.length+1,
          taskName: this.newTask,
          completionStatus: false
        });
      }
      this.newTask = ''; //elimino il contenuto dell'input dopo il submit/invio dati
    },
    clearTask(index) {
      this.tasks.splice(index,1);//splice mi permette di rimuovere, in questo caso, 1 elemento, cioè se stesso partendo dall'index cioè dove clicco
    },
  },

});
