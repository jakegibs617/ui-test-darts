# ui-test-darts
almost there... using objects in javascript to store players, their names, scores, and ranks.

![app](http://i.imgur.com/qFvHdRX.png)

### Rules
√: * After each player takes her/his turn, their name and score is entered into the text input in the format `name, score`.
√: * Clicking `Add to Rankings` parses the contents of the form field and adds the output to the rankings.
√: * The rankings should be appended to `ul#rankings` and formatted to meet the example output below.
√: * Players with the same score are 'tied', and should have the same rank.
not yet: * Players can take any number of turns. The results of multiple turns are added to the players' score.

### Example
The following game should produce the specified output.

#### Game:
```
Janet Pluchinsky, 10
Eliot Waugh, 1
Alice Quinn, 27
Julia Wicker, 7
Quentin Coldwater, 0
Janet Pluchinsky, 20
Julia Wicker, 20
Jollyby, 42
```

#### Results:
```
1. Jollyby, 42 pts
2. Janet Pluchinsky, 30 pts
3. Alice Quinn, 27 pts
3. Julia Wicker, 27 pts
5. Eliot Waugh, 1 pt
6. Quentin Coldwater, 0 pts
```