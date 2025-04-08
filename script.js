// 产品数据
const products = [
    {
        id: 1,
        name: 'TideMaster Cat',
        image: 'images/products/yacht.jpg',
        description: 'Experience the ultimate in stability and comfort with our high-performance catamaran design, crafted for unforgettable adventures.'
    },
    {
        id: 2,
        name: 'TideMaster Hyper',
        image: 'images/products/sailboat.jpg',
        description: 'Unleash the power of innovation with our M-Hull design, delivering unmatched performance and an extraordinary experience on every voyage.'
    },
    {
        id: 3,
        name: 'TideMaster Lounge',
        image: 'images/products/fishing.jpg',
        description: 'Embrace in luxury and family comfort with our exquisitely crafted yachts, designed for unforgettable moments and the perfect sea-going lifestyle.'
    }
];

// 动态加载产品
function loadProducts() {
    const grid = document.querySelector('.categories-grid');
    grid.innerHTML = products.map(product => `
        <div class="category-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="category-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="products/${product.id}.html" class="btn btn-secondary">查看详情</a>
            </div>
        </div>
    `).join('');
}

// 轮播图功能
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// 表单验证
function validateForm() {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(e) {
        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector('textarea');
        
        if (!name.value.trim()) {
            alert('请输入您的姓名');
            e.preventDefault();
            return;
        }
        
        if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
            alert('请输入有效的邮箱地址');
            e.preventDefault();
            return;
        }
        
        if (!message.value.trim()) {
            alert('请输入留言内容');
            e.preventDefault();
            return;
        }
    });
}

// 响应式导航菜单
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// 网站内容翻译
const translations = {
    zh: {
        // 导航栏
        'nav-boats': '船型系列',
        'nav-why': '为什么选择TideMaster',
        'nav-about': '关于我们',
        'nav-videos': '视频与新闻',
        'nav-dealers': '经销商',
        'build-boat': 'BUILD YOUR BOAT',

        // 首页英雄区
        'hero-title': 'TideMaster船舶科技',
        'hero-subtitle': '高端铝合金游艇制造商',
        'hero-desc': '专注于研发制造适合中东地区的高品质铝合金游艇和海钓船',

        // 船型系列
        'boat-range-title': '船型系列',
        'cat-title': 'TIDEMASTER CAT',
        'cat-desc': '高效节能的双体船设计，为您带来稳定舒适的海上体验',
        'hyper-title': 'TIDEMASTER HYPER',
        'hyper-desc': '高性能巡航船，为您带来极致的航海体验',
        'lounge-title': 'TIDEMASTER LOUNGE',
        'lounge-desc': '豪华休闲游艇，为您打造完美的海上生活方式',
        'view-details': '查看详情',

        // 为什么选择纳维
        'why-title': '为什么选择TideMaster',
        'quality-title': '卓越品质',
        'quality-desc': '采用高品质铝合金材料，精工打造',
        'design-title': '创新设计',
        'design-desc': '针对性设计，满足中东地区使用需求',
        'service-title': '优质服务',
        'service-desc': '专业的售后团队，为您提供全方位支持',

        // 页脚
        'footer-about': '关于TideMaster',
        'footer-desc': '阿联酋迪拜TideMaster船舶科技针对性研发适合当地的高品质铝合金游艇和海钓船',
        'contact-title': '联系方式',
        'company-id': '阿联酋企业代码：91000XX',
        'address': '阿联酋迪拜海事城38-88号',
        'address-2': '海湾创新中心3号楼142室',
        'follow-us': '关注我们',
        'copyright': '© 2024 TideMaster船舶科技'
    },
    en: {
        // Navigation
        'nav-boats': 'Boat Range',
        'nav-why': 'Why TideMaster',
        'nav-about': 'About Us',
        'nav-videos': 'Videos & News',
        'nav-dealers': 'Dealers',
        'build-boat': 'BUILD YOUR BOAT',

        // Hero Section
        'hero-title': 'TideMaster Marine Technology',
        'hero-subtitle': 'Premium Aluminum Yacht Manufacturer',
        'hero-desc': 'Specialized in developing and manufacturing high-quality aluminum yachts and fishing boats for the Middle East region',

        // Boat Range
        'boat-range-title': 'Boat Range',
        'cat-title': 'TIDEMASTER CAT',
        'cat-desc': 'Energy-efficient catamaran design for stable and comfortable sea experience',
        'hyper-title': 'TIDEMASTER HYPER',
        'hyper-desc': 'High-performance cruiser for ultimate sailing experience',
        'lounge-title': 'TIDEMASTER LOUNGE',
        'lounge-desc': 'Luxury lounge yacht for perfect marine lifestyle',
        'view-details': 'View Details',

        // Why Navier
        'why-title': 'Why TideMaster',
        'quality-title': 'Excellence',
        'quality-desc': 'Built with premium aluminum materials and craftsmanship',
        'design-title': 'Innovation',
        'design-desc': 'Targeted design meeting Middle East usage requirements',
        'service-title': 'Service',
        'service-desc': 'Professional after-sales team providing comprehensive support',

        // Footer
        'footer-about': 'About TideMaster',
        'footer-desc': 'UAE Dubai TideMaster Marine Technology specializes in developing high-quality aluminum yachts and fishing boats for local needs',
        'contact-title': 'Contact Us',
        'company-id': 'UAE Business Code: 91000XX',
        'address': 'No. 38-88, Dubai Maritime City',
        'address-2': 'Gulf Innovation Center Building 3, Room 142',
        'follow-us': 'Follow Us',
        'copyright': '© 2024 TideMaster Marine Technology'
    }
};

// 更新语言切换功能
function updateLanguage(lang) {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 更新所有带有 data-i18n-placeholder 属性的输入框
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // 保存语言选择
    localStorage.setItem('preferred-language', lang);
}

// 初始化价格显示
function initPriceDisplay() {
    // 设置发动机选项价格
    const enginePrices = {
        'verado-250': 15000,
        'verado-300': 18000,
        'verado-350': 21000,
        'verado-400': 24000,
        'verado-400r': 28000
    };

    // 设置导航套餐价格
    const navPrices = {
        'garmin-sport': 18000,
        'garmin-pro': 25000,
        'raymarine-sport': 20000,
        'raymarine-pro': 28000,
        'tidemaster-sport': 35000,
        'tidemaster-pro': 38000
    };

    // 更新发动机价格显示
    document.querySelectorAll('input[name="engine"]').forEach((radio, index) => {
        const engineTypes = Object.keys(enginePrices);
        const priceElement = radio.closest('label').querySelector('.option-price');
        if (priceElement) {
            priceElement.textContent = `$${formatPrice(enginePrices[engineTypes[index]])}`;
        }
    });

    // 更新导航套餐价格显示
    document.querySelectorAll('input[name="nav-package"]').forEach((radio, index) => {
        const navTypes = Object.keys(navPrices);
        const priceElement = radio.closest('.col-package').querySelector('.package-price');
        if (priceElement) {
            priceElement.textContent = `$${formatPrice(navPrices[navTypes[index]])}`;
        }
    });
}

// 保存用户选择到 localStorage
function saveUserSelections() {
    // 收集所有标准配置组
    const standardConfigs = {};
    document.querySelectorAll('.configurations .config-group').forEach(group => {
        const groupTitle = group.querySelector('h3').textContent;
        const selectedItems = Array.from(group.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => {
                const label = checkbox.closest('label');
                return {
                    title: label.querySelector('.option-title').textContent,
                    description: label.querySelector('.option-description')?.textContent || ''
                };
            });
        if (selectedItems.length > 0) {
            standardConfigs[groupTitle] = selectedItems;
        }
    });

    const selections = {
        standardConfigs: standardConfigs,
        
        engineSelection: document.querySelector('input[name="engine"]:checked')?.closest('label')
            .querySelector('.option-title').textContent || 'Not selected',
        
        enginePrice: document.querySelector('input[name="engine"]:checked')?.closest('label')
            .querySelector('.option-price').textContent || '$0',
        
        navSelection: document.querySelector('input[name="nav-package"]:checked')?.closest('.col-package')
            .querySelector('div').textContent || 'Not selected',
        
        navPrice: document.querySelector('input[name="nav-package"]:checked')?.closest('.col-package')
            .querySelector('.package-price').textContent || '$0',
        
        accessories: Array.from(document.querySelectorAll('.optional-accessories .config-option input[type="checkbox"]:checked'))
            .map(checkbox => ({
                title: checkbox.closest('label').querySelector('.option-title').textContent,
                price: checkbox.closest('label').querySelector('.option-price').textContent
            }))
    };
    
    localStorage.setItem('boatSelections', JSON.stringify(selections));
}

// 在提交订单页面加载用户选择
function loadUserSelections() {
    const selections = JSON.parse(localStorage.getItem('boatSelections'));
    if (!selections) return;

    // 填充标准配置列表
    const standardConfigList = document.getElementById('standard-config-list');
    if (standardConfigList && selections.standardConfigs) {
        let configHtml = '';
        for (const [groupTitle, items] of Object.entries(selections.standardConfigs)) {
            configHtml += `
                <li class="config-group-section">
                    <h5>${groupTitle}</h5>
                    <ul class="config-items">
                        ${items.map(item => `
                            <li class="config-item">
                                <div class="item-title">${item.title}</div>
                                ${item.description ? `<div class="item-description">${item.description}</div>` : ''}
                            </li>
                        `).join('')}
                    </ul>
                </li>
            `;
        }
        standardConfigList.innerHTML = configHtml;
    }

    // 填充发动机选择
    const selectedEngine = document.getElementById('selected-engine');
    if (selectedEngine && selections.engineSelection) {
        selectedEngine.innerHTML = `
            <div class="selection-item">
                <span class="item-name">${selections.engineSelection}</span>
                <span class="item-price">${selections.enginePrice}</span>
            </div>
        `;
    }

    // 填充导航电子设备选择
    const selectedNav = document.getElementById('selected-nav');
    if (selectedNav && selections.navSelection) {
        selectedNav.innerHTML = `
            <div class="selection-item">
                <span class="item-name">${selections.navSelection}</span>
                <span class="item-price">${selections.navPrice}</span>
            </div>
        `;
    }

    // 填充可选配件列表
    const accessoriesList = document.getElementById('accessories-list');
    if (accessoriesList && selections.accessories) {
        accessoriesList.innerHTML = selections.accessories
            .map(item => `
                <li class="selection-item">
                    <span class="item-name">${item.title}</span>
                    <span class="item-price">${item.price}</span>
                </li>
            `)
            .join('');
    }

    // 更新价格摘要
    document.getElementById('engine-price').textContent = selections.enginePrice;
    document.getElementById('nav-price').textContent = selections.navPrice;
    
    // 计算配件总价
    const accessoriesTotal = selections.accessories.reduce((sum, item) => 
        sum + parseInt(item.price.replace(/[^0-9]/g, '')), 0);
    document.getElementById('accessories-price').textContent = `$${formatPrice(accessoriesTotal)}`;
    
    // 计算总价
    const totalPrice = 120000 + // 基础价格
        parseInt(selections.enginePrice.replace(/[^0-9]/g, '')) +
        parseInt(selections.navPrice.replace(/[^0-9]/g, '')) +
        accessoriesTotal;
    
    document.getElementById('total-price').textContent = `$${formatPrice(totalPrice)}`;
}

// 格式化价格函数
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 更新价格显示
function updatePriceDisplay() {
    const basePrice = 120000;
    const enginePrice = parseInt(document.getElementById('engine-price').textContent.replace(/[^0-9]/g, '')) || 0;
    const navPrice = parseInt(document.getElementById('nav-price').textContent.replace(/[^0-9]/g, '')) || 0;
    const accessoriesPrice = parseInt(document.getElementById('accessories-price').textContent.replace(/[^0-9]/g, '')) || 0;
    
    const totalPrice = basePrice + enginePrice + navPrice + accessoriesPrice;
    document.getElementById('total-price').textContent = `$${formatPrice(totalPrice)}`;
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('submit-order.html')) {
        loadUserSelections();
        
        // 连接计算按钮
        const calculateButton = document.getElementById('calculate-button');
        if (calculateButton) {
            calculateButton.addEventListener('click', updatePriceDisplay);
        }
        
        // 处理表单提交
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                showOrderConfirmation();
            });
        }
    }
});
