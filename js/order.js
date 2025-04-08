// 价格计算和数据收集函数
function calculateTotalPrice() {
    let totalPrice = 120000; // 基础价格
    let navPrice = 0;
    let accessoriesPrice = 0;

    // 获取选中的引擎
    const selectedEngine = document.querySelector('input[name="engine"]:checked');
    if (selectedEngine) {
        totalPrice += parseFloat(selectedEngine.dataset.price || 0);
    }

    // 获取选中的导航包
    const selectedNav = document.querySelector('input[name="nav-package"]:checked');
    if (selectedNav) {
        navPrice = parseFloat(selectedNav.dataset.price || 0);
        totalPrice += navPrice;
    }

    // 获取选中的配件
    const selectedAccessories = document.querySelectorAll('.config-option input[type="checkbox"]:checked');
    selectedAccessories.forEach(accessory => {
        const priceText = accessory.closest('.config-option').querySelector('.option-price').textContent;
        const price = parseFloat(priceText.replace(/[^0-9]/g, ''));
        accessoriesPrice += price;
        totalPrice += price;
    });

    // 更新显示
    if (document.getElementById('total-price')) {
        document.getElementById('total-price').textContent = `$${totalPrice.toLocaleString()}`;
    }
    if (document.getElementById('nav-price')) {
        document.getElementById('nav-price').textContent = `$${navPrice.toLocaleString()}`;
    }
    if (document.getElementById('accessories-price')) {
        document.getElementById('accessories-price').textContent = `$${accessoriesPrice.toLocaleString()}`;
    }

    return {
        total: totalPrice,
        nav: navPrice,
        accessories: accessoriesPrice,
        selectedItems: Array.from(selectedAccessories).map(acc => {
            const title = acc.closest('.config-option').querySelector('.option-title').textContent;
            const price = acc.closest('.config-option').querySelector('.option-price').textContent;
            return { title, price };
        })
    };
}

// 在提交订单页面显示选择的配置
function displayOrderSummary() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderData = JSON.parse(decodeURIComponent(urlParams.get('orderData') || '{}'));

    // 显示引擎选择
    if (orderData.engine) {
        document.getElementById('selected-engine').innerHTML = `
            <div class="selection-item">
                <span class="item-name">${orderData.engine.name}</span>
                <span class="item-price">${orderData.engine.price}</span>
            </div>
        `;
    }

    // 显示导航系统选择
    if (orderData.nav) {
        document.getElementById('selected-nav').innerHTML = `
            <div class="selection-item">
                <span class="item-name">${orderData.nav.name}</span>
                <span class="item-price">${orderData.nav.price}</span>
            </div>
        `;
    }

    // 显示配件列表
    if (orderData.accessories && orderData.accessories.length > 0) {
        const accessoriesList = document.getElementById('accessories-list');
        accessoriesList.innerHTML = orderData.accessories
            .map(acc => `
                <div class="selection-item">
                    <span class="item-name">${acc.title}</span>
                    <span class="item-price">${acc.price}</span>
                </div>
            `).join('');
    }

    // 更新总价格
    if (orderData.total) {
        document.getElementById('total-price').textContent = `$${orderData.total.toLocaleString()}`;
    }
}

// 在页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否在提交订单页面
    if (window.location.pathname.includes('submit-order.html')) {
        displayOrderSummary();
    }

    // 为配置页面的所有选项添加事件监听器
    const configInputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    configInputs.forEach(input => {
        input.addEventListener('change', calculateTotalPrice);
    });

    // 设置提交按钮的事件监听器
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const priceData = calculateTotalPrice();
            const selectedEngine = document.querySelector('input[name="engine"]:checked');
            const selectedNav = document.querySelector('input[name="nav-package"]:checked');

            const orderData = {
                engine: selectedEngine ? {
                    name: selectedEngine.value,
                    price: `$${parseFloat(selectedEngine.dataset.price || 0).toLocaleString()}`
                } : null,
                nav: selectedNav ? {
                    name: selectedNav.value,
                    price: `$${parseFloat(selectedNav.dataset.price || 0).toLocaleString()}`
                } : null,
                accessories: priceData.selectedItems,
                total: priceData.total
            };

            // 将数据添加到表单中
            const orderDataInput = document.createElement('input');
            orderDataInput.type = 'hidden';
            orderDataInput.name = 'orderData';
            orderDataInput.value = encodeURIComponent(JSON.stringify(orderData));
            orderForm.appendChild(orderDataInput);

            // 提交表单
            orderForm.submit();
        });
    }
});