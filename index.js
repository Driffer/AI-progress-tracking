<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>90-Day Progress Tracker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>90-Day Programming Progress Tracker</h1>
        
        <form id="progressForm">
            <label for="challengeName">Today's Challenge:</label>
            <input type="text" id="challengeName" placeholder="e.g., Learn Sorting Algorithms" required>
            
            <button type="submit">Log Challenge</button>
        </form>

        <h3>Your Challenges</h3>
        <ul id="challengeList"></ul>

        <div id="feedback">
            <h3>Feedback</h3>
            <p id="userFeedback"></p>
        </div>
    </div>
    
    <script src="app.js"></script>
</body>
</html>
