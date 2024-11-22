const loadMoreButton = document.querySelector('.load-more__btn');

let offset = 0;

export const loadMore = async function () {
    if (!loadMoreButton) {
        return;
    }
    loadMoreButton.addEventListener('click', async (e) => {
        e.preventDefault();
        offset += 6;

        try {
            const response = await fetch(`/catalogue/api/coffees?limit=6&offset=${offset}`);

            if (!response.ok) {
                throw new Error('Une erreur est survenue');
            }

            const newCoffees = await response.json();

            if (newCoffees.length === 0) {
                loadMoreButton.remove();
                return;
            }

            const catalogCardsContainer = document.querySelector('.catalog-cards');
            newCoffees.forEach(coffee => {
                const cardHTML = `
                            <div class="card catalog-card">
                                <img src="/images/coffees/${coffee.reference}.webp" alt="Photo représentant le café ${coffee.name}">
                                <h3>${coffee.name}</h3>
                                <div class="badge">
                                    <span class="badge__origin">${coffee.country}</span>
                                    <span class="badge__intensity">${coffee.coffee_type}</span>
                                </div>
                                <p class="description">${coffee.description}</p>
                                <a class="button discover" href="/catalogue/${coffee.id}">Découvrir</a>
                            </div>
                        `;
                const container = document.createElement('div');
                container.innerHTML = cardHTML;
                const cardElement = container.firstElementChild;
                catalogCardsContainer.appendChild(cardElement);
            });
        } catch (error) {
            console.error(error);
            alert('Impossible de charger plus de cafés pour le moment');
        }
    });
};
