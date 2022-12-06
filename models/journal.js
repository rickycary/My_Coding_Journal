// Creates entries for Journal
const Journal = {
    data: [
        {
            day: "Tuesday",
            goals: "Goals Submission",
            goalsCompleted: true,
            entry: "What did you do today"
         },
         {
            day: "Wednesday",
            goals: "Goals Submission",
            goalsCompleted: false,
            entry: "What did you do today"
         }
    ],
    getAll: function(){
        return this.data
    },
    getOne: function(index){
        return this.data[index]
    }
}

module.exports = Journal