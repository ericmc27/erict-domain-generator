let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (x in pronoun){
  for (y in adj){
    for (z in noun){
      console.log(`${pronoun[x]}${adj[y]}${noun[z]}.com`)
    }
  }
}