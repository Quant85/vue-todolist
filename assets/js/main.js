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
        taskName: "Ricordati di pushare1",
        important: false,
        completionStatus: false,
      },
      {
        taskName: "Ricordati di pushare2",
        important: false,
        completionStatus: false,
      },
      {
        taskName: "Cambia messaggio di tanto in tanto",
        important: false,
        completionStatus: false,
      },
      {
        taskName: "Commenta il codice",
        important: false,
        completionStatus: false,
      },
    ],
    newTask: "",
    completedTasks:[],
  },
  important: {

  },
  methods: {
    addTask: function(){
      //con il condizionela evito stringhe vuote - si potrebbe provare ad attivare la condizione di error del tag input
      if (this.newTask.length >= 4) {
        this.tasks.push({
          taskName: this.newTask,
          important: false,
          completionStatus: false
        });
      }
      this.newTask = ''; //elimino il contenuto dell'input dopo il submit/invio dati
    },
    clearTask(index) {
      this.tasks.splice(index,1);//splice mi permette di rimuovere, in questo caso, 1 elemento, cioè se stesso partendo dall'index cioè dove clicco
    },
    importantTask(index) {
      if (this.tasks[index].important) {
        this.tasks[index].important = false;
        console.log(this.tasks[index].important);
        this.tasks.sort((x,y) => y.important - x.important);//ordine decrescente
        console.log(this.tasks);
      } else if (!this.tasks[index].important){
        this.tasks[index].important = true;
        console.log(this.tasks[index].important);
        this.tasks.sort((x,y) => y.important - x.important);//ordine decrescente mi garantisce che gli iSimportan siano sempre più in alto de notImportant
        console.log(this.tasks);
      }
    },
  },
});
