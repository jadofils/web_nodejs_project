<section id="add_expense">
        <h2>Add Expense</h2>
        <form action="/add_expense" name="add_expense" method="post">
            <div>
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required>
            </div>
            <div>
                <label for="amount">Amount:</label>
                <input type="number" id="amount" name="amount" required>
            </div>
            <div>
                <label for="description">Description:</label>
                <input type="text" id="description" name="description" required>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    </section>