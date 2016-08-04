export class InMemoryDataService {
    createDb() {
        let employers = [
            { id : 1, name : "Durant", description : "SF/PF, 206cm, 106kg, 2014 MVP，7 times AllStar, 2014 World Champion", purpose : "Maximun salary, NBA title", add : "LA.Shud.Aue", goal : "Warriors"},
            { id : 2, name : "Conley", description : "PG, 183cm, 82kg, starter", purpose : "Maximun salary", add : "DC.Nerton.Aue", goal : "Memphis"},
            { id : 3, name : "DeRozan", description : "SG, 201cm, 99.8kg, 2014 World Champion", purpose : "Maximun salary", add : "LA.Starts.Aue", goal : "Raptors"},
            { id : 4, name : "Jeremy Lin", description : "PG, 191cm, 91kg, undrafted, Harford, Eastern Conference Player of the Week ", purpose : "starter", add : "LA.Staples.Aue", goal : "Nets"},
            { id : 5, name : "AI Horford", description : "PF/C, 208cm, 111kg, All Star substitute", purpose : "Maximun salary,NBA title", add : "Washington.4rd.rd", goal : "Celtics"}
        ];
        return {employers};
    }
}
