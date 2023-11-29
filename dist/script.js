let currentPlayer = 'X';
        const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

        function handleClick(index) {
            if (board[index] === ' ') {
                board[index] = currentPlayer;
                const cell = document.getElementById('board').children[index];
                const img = document.createElement('img');
                
                if (currentPlayer === 'X') {
                    img.src = '..../img/x.png';
                    img.classList.add('w-10'); 
                } else {
                    img.src = '..../img/o.png';
                    img.classList.add('w-10'); 
                }
    
                cell.innerHTML = ''; // Clear any previous content
                cell.appendChild(img);

                checkWinner();
                togglePlayer();
            }
        }

        function togglePlayer() {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

        function checkWinner() {
            // Check rows
            for (let i = 0; i < 9; i += 3) {
                if (board[i] !== ' ' && board[i] === board[i + 1] && board[i] === board[i + 2]) {
                    announceWinner(board[i]);
                    return;
                }
            }
        
            // Check columns
            for (let i = 0; i < 3; i++) {
                if (board[i] !== ' ' && board[i] === board[i + 3] && board[i] === board[i + 6]) {
                    announceWinner(board[i]);
                    return;
                }
            }
        
            // Check diagonals
            if (board[0] !== ' ' && board[0] === board[4] && board[0] === board[8]) {
                announceWinner(board[0]);
                return;
            }
        
            if (board[2] !== ' ' && board[2] === board[4] && board[2] === board[6]) {
                announceWinner(board[2]);
                return;
            }
        
            // Check for a tie
            if (!board.includes(' ')) {
                announceTie();
            }
        }
        
        function announceWinner(winner) {
            document.getElementById('announcement').innerHTML = `${winner} wins!`;
            resetGame();
        }
        
        function announceTie() {
            document.getElementById('announcement').innerHTML = `Its a tie!`;
            resetGame();
        }
        
        function resetGame() {
            board.fill(' ');
            document.getElementById('board').childNodes.forEach((child) => {
                child.innerText = '';
            });
            currentPlayer = 'X';
        }