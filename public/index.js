async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    const response = await fetch('http://localhost:9001/counter');

    const result = await response.json();
    
    let countValue = result.value;

    function increment(){
        countValue++;
        updateMockDB();
    }

    function decrement(){
        countValue--;
        updateMockDB();
    }

    async function updateMockDB() {
        fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: countValue
            })
        })

        return countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
}
main()