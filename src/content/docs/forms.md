# Forms og Flask

Med *Forms* og Flask kan vi sende data fra html til Python.

## Eksempel: Hallo, navn!

app.py
```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.get("/")
def rute_index():
    return render_template("index.html")

@app.get("/hallo")
def rute_hallo():
    navn = request.values.get("navn") # henter navn som ble sendt fra html
    return render_template("hallo.html", navn=navn)

app.run(debug=True)
```

templates/index.html

```html
<form action="/hallo" method="get">
    <label>Navn:</label>
    <input type="text" name="navn">
    <button type="submit">Send inn</button>
</form>
```

templates/hallo.html

```html
<h1>Hallo, {{navn}}!</h1>
```

## Input-elementer

Alle input-elementer må ha attributten `name`, det er en som angir navnet input-verdien får i app.py.

For eksempel kan verdien til dette input-elementet: 

```html 
<input type="number" name="alder">
``` 

hentes ut i app.py med 
```python
request.values.get("alder")
```

### Liste over input-elementer

Her er noen vanlige input-elementer.

| Element                               | På nettsiden                        |
| ------------------------------------- | ----------------------------------- |
| `<input type="text" name="NAVN">`     | <input type="text" name="NAVN">     |
| `<input type="number" name="NAVN">`   | <input type="number" name="NAVN">   |
| `<input type="checkbox" name="NAVN">` | <input type="checkbox" name="NAVN"> |
| `<input type="color" name="NAVN">`    | <input type="color" name="NAVN">    |
| `<input type="date" name="NAVN">`     | <input type="date" name="NAVN">     |
| `<input type="file" name="NAVN">`     | <input type="file" name="NAVN">     |
| `<input type="hidden" name="NAVN">`   | <input type="hidden" name="NAVN">   |
| `<input type="password" name="NAVN">` | <input type="password" name="NAVN"> |

### Eksempel: brukernavn og passord

```html
 <form action="/logg-inn" method="post">
  <label for="brukernavn">Brukernavn:</label><br>
  <input type="text" id="brukernavn" name="brukernavn"><br>
  <label for="passord">Passord:</label><br>
  <input type="password" id="passord" name="passord">
  <button type="submit">Logg inn</button>
</form> 
```
<div style="border: solid 1px black; padding: 5px;">
 <form>
  <label for="brukernavn">Brukernavn:</label><br>
  <input type="text" id="brukernavn" name="brukernavn"><br>
  <label for="passord">Passord:</label><br>
  <input type="password" id="passord" name="passord">
  <button style="background-color: lightgrey; border-radius:2px; margin-top: 4px;">Logg inn</button>
 </form> 
</div>