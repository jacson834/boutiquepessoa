document.addEventListener('DOMContentLoaded', () => {
    // Dados dos produtos
    const products = [
        { id: 1, title: "Anel Feminino", price: 129.90, oldPrice: 149.90, image: "assets/joias/Anel Feminino R$ 129,90 cada.jpeg", badge: "Mais Vendido" },
        { id: 2, title: "Brinco Feminino", price: 89.90, oldPrice: 119.90, image: "assets/joias/Brinco Feminino R$ 89,90 2.jpeg", badge: "Promoção" },
        { id: 3, title: "Brinco Feminino", price: 89.90, oldPrice: 99.90, image: "assets/joias/Brinco Feminino R$ 89,90 3.jpeg", badge: "Essencial" },
        { id: 4, title: "Brinco Feminino", price: 89.90, oldPrice: 129.90, image: "assets/joias/Brinco Feminino R$ 89,90.jpeg", badge: "Últimas Unidades" },
        { id: 5, title: "Brinco infantil", price: 29.90, oldPrice: 59.90, image: "assets/joias/Brinco infantil R$ 29,90 Cada 2.jpeg", badge: "Kit" },
        { id: 6, title: "Brinco infantil", price: 29.90, oldPrice: 39.90, image: "assets/joias/Brinco infantil R$ 29,90 Cada 3.jpeg", badge: "Verão" },
        { id: 7, title: "Brinco infantil", price: 29.90, oldPrice: 59.90, image: "assets/joias/Brinco infantil R$ 29,90 cada 4.jpeg", badge: "Novidade" },
        { id: 8, title: "Brinco infantil", price: 29.90, oldPrice: 49.90, image: "assets/joias/Brinco infantil R$ 29,90 cada 5.jpeg", badge: "" },
        { id: 9, title: "Brinco Argola de Gota", price: 109.90, oldPrice: 159.90, image: "assets/joias/Brinco Argola de Gota-R$ 109,90.jpeg", badge: "Tendência" },
        { id: 10, title: "Brinco Argola Luxo", price: 98.90, oldPrice: 119.90, image: "assets/joias/Brinco Argola luxo-R$ 98,90.jpeg", badge: "Novidade" },
        { id: 11, title: "Anel Aparador", price: 99.90, oldPrice: 129.90, image: "assets/joias/Anel Aparador.jpeg", badge: "Promoção" },
        { id: 12, title: "Pulseira Riviera", price: 189.90, oldPrice: 249.90, image: "assets/joias/Pulseira Riviera.jpeg", badge: "Luxo" },
        { id: 13, title: "Choker Ponto de Luz", price: 89.90, oldPrice: 119.90, image: "assets/joias/Choker Ponto de Luz.jpeg", badge: "" },
        { id: 14, title: "Brinco Ear Cuff", price: 109.90, oldPrice: 149.90, image: "assets/joias/Brinco Ear Cuff.jpeg", badge: "Novidade" },
        { id: 15, title: "Anel Falange", price: 69.90, oldPrice: 89.90, image: "assets/joias/Anel Falange.jpeg", badge: "" },
        { id: 16, title: "Colar Letra Inicial", price: 119.90, oldPrice: 159.90, image: "assets/joias/Colar Letra Inicial.jpeg", badge: "Personalizado" },
        { id: 17, title: "Pulseira Olho Grego", price: 99.90, oldPrice: 129.90, image: "assets/joias/Pulseira Olho Grego.jpeg", badge: "Proteção" },
        { id: 18, title: "Brinco Pérola", price: 79.90, oldPrice: 109.90, image: "assets/joias/Brinco Perola.jpeg", badge: "Clássico" },
        { id: 19, title: "Anel Coração Vazado", price: 109.90, oldPrice: 139.90, image: "assets/joias/Anel Coracao Vazado.jpeg", badge: "" },
        { id: 20, title: "Colar Gravatinha", price: 129.90, oldPrice: 169.90, image: "assets/joias/Colar Gravatinha.jpeg", badge: "Elegante" },
        { id: 21, title: "Brinco Argola Pequena", price: 69.90, oldPrice: 99.90, image: "assets/joias/Brinco Argola Pequena.jpeg", badge: "" },
        { id: 22, title: "Pulseira Infantil", price: 79.90, oldPrice: 99.90, image: "assets/joias/Pulseira Infantil.jpeg", badge: "Infantil" },
        { id: 23, title: "Anel de Dedinho", price: 89.90, oldPrice: 119.90, image: "assets/joias/Anel de Dedinho.jpeg", badge: "Estilo" },
        { id: 24, title: "Colar Longo", price: 149.90, oldPrice: 199.90, image: "assets/joias/Colar Longo.jpeg", badge: "" },
        { id: 25, title: "Brinco Segundo Furo", price: 59.90, oldPrice: 79.90, image: "assets/joias/Brinco Segundo Furo.jpeg", badge: "Básico" },
        { id: 26, title: "Tornozeleira Coração", price: 89.90, oldPrice: 119.90, image: "assets/joias/Tornozeleira Coracao.jpeg", badge: "" },
        { id: 27, title: "Anel Regulável", price: 119.90, oldPrice: 149.90, image: "assets/joias/Anel Regulavel.jpeg", badge: "Versátil" },
        { id: 28, title: "Colar Duplo", price: 169.90, oldPrice: 219.90, image: "assets/joias/Colar Duplo.jpeg", badge: "" },
        { id: 29, title: "Brinco Masculino", price: 69.90, oldPrice: 89.90, image: "assets/joias/Brinco Masculino.jpeg", badge: "Masculino" }
    ];

    // Carrinho de compras
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productsDisplayed = 0;
    const productsIncrement = 8;

    // DOM Elements
    const productsGrid = document.getElementById('productsGrid');
    const cartIcon = document.getElementById('cartIcon');
    const cartCount = document.getElementById('cartCount');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const overlay = document.getElementById('overlay');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelector('.nav-links');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    // Elementos do Modal de Imagem
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModal');
    const modalProductTitle = document.getElementById('modalProductTitle');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Estado do Modal
    let currentModalProductId = null;
    let currentlyVisibleProducts = [];

    // Intersection Observer para animação de fade-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para a observação após a animação
            }
        });
    }, { threshold: 0.1 }); // Aciona quando 10% do item estiver visível

    // Carrega mais produtos na grade
    function loadMoreProducts() {
        const newProducts = products.slice(productsDisplayed, productsDisplayed + productsIncrement);
        newProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.title}" class="product-img" data-id="${product.id}" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        R$ ${product.price.toFixed(2).replace('.', ',')}
                        ${product.oldPrice ? `<span>R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-sm add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);

            // Observa o novo card para a animação
            observer.observe(productCard);
        });
        
        currentlyVisibleProducts.push(...newProducts);
        productsDisplayed += newProducts.length;

        if (productsDisplayed >= products.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart-message">Seu carrinho está vazio</p>';
            cartTotal.style.display = 'none';
        } else {
            cartItems.innerHTML = '';
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.title}</h4>
                        <p class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                        <div class="cart-quantity">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        </div>
                        <a href="#" class="cart-item-remove remove-item" data-id="${item.id}">Remover</a>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });

            const subtotalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            subtotal.textContent = `R$ ${subtotalValue.toFixed(2).replace('.', ',')}`;
            total.textContent = `R$ ${subtotalValue.toFixed(2).replace('.', ',')}`;
            cartTotal.style.display = 'block';
        }
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCart();
        showSidebar();
    }

    function handleCartActions(e) {
        const target = e.target;
        const productId = parseInt(target.dataset.id);
        const item = cart.find(i => i.id === productId);

        if (!item) return;

        if (target.classList.contains('increase')) {
            item.quantity++;
        } else if (target.classList.contains('decrease')) {
            item.quantity--;
            if (item.quantity === 0) {
                cart = cart.filter(i => i.id !== productId);
            }
        } else if (target.classList.contains('quantity-input')) {
            const newQuantity = parseInt(target.value);
            if (newQuantity > 0) {
                item.quantity = newQuantity;
            } else {
                cart = cart.filter(i => i.id !== productId);
            }
        } else if (target.classList.contains('remove-item')) {
            e.preventDefault();
            cart = cart.filter(i => i.id !== productId);
        }

        updateCart();
    }

    function showSidebar() {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function hideSidebar() {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function checkout() {
        if (cart.length === 0) return;

        let message = "Olá, gostaria de finalizar minha compra com os seguintes itens:\n\n";
        cart.forEach(item => {
            message += `- ${item.title} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
        });
        
        const subtotalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        message += `\n*Total: R$ ${subtotalValue.toFixed(2).replace('.', ',')}*\n\n`;
        message += "Por favor, confirme a disponibilidade e me informe as formas de pagamento. Obrigado!";
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "5569993294814";
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        
        cart = [];
        updateCart();
        hideSidebar();
    }

    // --- Funções do Modal de Imagem ---

    function showProductInModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        currentModalProductId = productId;

        modalImage.src = product.image;
        modalImage.alt = product.title;
        modalProductTitle.textContent = product.title;
        modalProductPrice.textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
    }

    function openImageModal(productId) {
        showProductInModal(productId);
        imageModal.style.display = "block";
        document.body.style.overflow = 'hidden'; // Impede o scroll do fundo
    }

    function navigateModal(direction) {
        const currentIndex = currentlyVisibleProducts.findIndex(p => p.id === currentModalProductId);
        if (currentIndex === -1) return;

        let nextIndex = currentIndex + direction;

        if (nextIndex >= currentlyVisibleProducts.length) {
            nextIndex = 0; // Volta para o primeiro
        } else if (nextIndex < 0) {
            nextIndex = currentlyVisibleProducts.length - 1; // Vai para o último
        }

        const nextProductId = currentlyVisibleProducts[nextIndex].id;
        showProductInModal(nextProductId);
    }

    // Event listeners
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }

    if (productsGrid) {
        productsGrid.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('add-to-cart')) {
                const productId = parseInt(e.target.dataset.id);
                addToCart(productId);
            } else if (target.classList.contains('product-img')) {
                const productId = parseInt(target.dataset.id);
                openImageModal(productId);
            }
        });
    }

    cartIcon.addEventListener('click', showSidebar);
    closeCart.addEventListener('click', hideSidebar);
    overlay.addEventListener('click', hideSidebar);
    checkoutBtn.addEventListener('click', checkout);

    cartItems.addEventListener('click', handleCartActions);
    cartItems.addEventListener('change', handleCartActions);

    // Funções para fechar o modal de imagem
    function closeImageModal() {
        if (imageModal.style.display === "block") {
            imageModal.style.display = "none";
            // Só restaura o scroll se o carrinho não estiver aberto
            if (!cartSidebar.classList.contains('active')) {
                document.body.style.overflow = 'auto';
            }
        }
    }

    closeModalBtn.addEventListener('click', closeImageModal);
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) { // Fecha se clicar no fundo
            closeImageModal();
        }
    });

    prevBtn.addEventListener('click', () => navigateModal(-1));
    nextBtn.addEventListener('click', () => navigateModal(1));

    // Navegação do modal com o teclado
    document.addEventListener('keydown', (e) => {
        if (imageModal.style.display === "block") {
            if (e.key === 'ArrowLeft') {
                navigateModal(-1);
            } else if (e.key === 'ArrowRight') {
                navigateModal(1);
            } else if (e.key === 'Escape') {
                closeImageModal();
            }
        }
    });

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.querySelector('i').classList.toggle('fa-bars');
        mobileMenu.querySelector('i').classList.toggle('fa-times');
    });

    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('active');
            mobileMenu.querySelector('i').classList.remove('fa-times');
            mobileMenu.querySelector('i').classList.add('fa-bars');
        }
    });

    // Accordion Logic
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const currentlyActiveItem = document.querySelector('.accordion-item.active');
            if (currentlyActiveItem && currentlyActiveItem !== item) {
                currentlyActiveItem.classList.remove('active');
                currentlyActiveItem.querySelector('.accordion-content').style.maxHeight = null;
            }

            item.classList.toggle('active');
            const content = item.querySelector('.accordion-content');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Handle footer links to open accordion
    document.querySelectorAll('.info-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the info section first
                document.getElementById('info-pages').scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Wait for scroll to finish then open accordion
                setTimeout(() => {
                    const header = targetElement.querySelector('.accordion-header');
                    if (header && !targetElement.classList.contains('active')) {
                        header.click();
                    }
                }, 500); // Adjust timeout if needed
            }
        });
    });

    // Initialize
    if (productsGrid) {
        loadMoreProducts();
    }
    updateCart();
});