'use strict';

/**
 * @ngdoc service
 * @name contentfulCustomCmsApp.ENLanguagePack
 * @description
 * # ENLanguagePack
 * Constant in the contentfulCustomCmsApp.
 */
angular.module('contentfulCustomCmsApp')
    .constant('ENLanguagePack', (function() {
        var translations = {
            HOME: 'Home',
            HELLO: 'Hello',
            BUYING_SECTION_HEADER: 'Buying',
            SELLING_SECTION_HEADER: 'Selling',
            ADMIN_SECTION_HEADER: 'Admin',
            LANGUAGE: 'Language',
            REGISTER: 'Register',
            LOG_IN: 'Log in',
            PROFILE: 'Profile',
            PURCHASES: 'Purchases',
            NO_PURCHASES: 'No purchases',
            DELIVERIES: 'Deliveries',
            PAYMENTS: 'Payments',
            LOG_OUT: 'Log out',
            SLOGAN: 'Local food marketplace',
            SEARCH: 'Search',
            SEARCH_PLACEHOLDER: 'Search by product or category name',
            CATEGORIES: 'Categories',
            OVERVIEW: 'Overview',
            CONTAINER_TYPES: 'Container types',
            TRUCKS: 'Trucks',
            PRODUCTS: 'Products',
            USERS: 'Users',
            ITEMS: 'Items',
            SHOPPING_CARTS: 'Shopping carts',
            DELETE_ITEM: 'Delete item',
            SURE_TO_DELETE: 'Are you sure you want to delete this item?',
            CANCEL: 'Cancel',
            DELETE: 'Delete',
            ITEM_DETAIL: 'Item detail',
            ADD: 'Add',
            SAVE: 'Save',
            NO: 'No',
            EDIT: 'Edit',
            DETAILS: 'Details',
            DETAIL: 'Detail',
            PRODUCT: 'Product',
            PRICE: 'Price',
            VALID_UNTIL: 'Valid until',
            FROM: 'from',
            CONTAINER: 'Container',
            ITEMS_PER_CONTAINER: 'Items / container',
            AVAILABLE: 'Available',
            NOT_AVAILABLE: 'N/A',
            ADD_TO_CART: 'Add to cart',
            IN_CART: 'In cart',
            EAN8: 'EAN8',
            EAN13: 'EAN13',
            CATEGORY: 'Category',
            TAGS: 'Tags',
            CLOSE: 'Close',
            TO_CHECKOUT: 'To checkout',
            IN_SHOPPING_CART: 'In your shopping cart',
            TODAY: 'Today',
            SOLD_LAST_7_DAYS: 'Sold(last 7 days)',
            SOLD_LAST_30_DAYS: 'Sold(last 30 days)',
            SOLD_LAST_180_DAYS: 'Sold(last 180 days)',
            UNSOLD: 'Unsold',
            SOLD: 'Sold',
            TOTAL: 'Total',
            VIEW_ALL: 'View all',
            AVAILABLE_ITEMS: 'Available items',
            NO_AVAILABLE_ITEMS: 'No available items',
            SHOPPING_CART: 'Shopping cart',
            NO_ITEMS: 'No items',
            DELETE_ALL: 'Delete all',
            BUY: 'Buy',
            name: 'Name',
            volume: 'Volume',
            deposit: 'Deposit',
            commission: 'Commission',
            created: 'Created',
            updated: 'Updated',
            defaultVat: 'Default VAT',
            parentId: 'Parent',
            icon: 'Icon',
            ordering: 'Ordering',
            isActive: 'Is active',
            isOrganic: 'Is organic',
            isVegan: 'Is vegan',
            isGlutenFree: 'Is gluten free',
            category: 'Category',
            imageUrl: 'Image',
            image: 'Image',
            categoryId: 'Category',
            description: 'Description',
            sellerId: 'Seller',
            price: 'Price',
            unit: 'Unit',
            containerTypeId: 'Container type',
            itemsPerContainer: 'Items per container',
            sellersProductIdentifier: 'Sellers product identifier',
            ean8: 'EAN8',
            ean13: 'EAN13',
            tags: 'Tags',
            firstName: 'First name',
            lastName: 'Last name',
            emailVerified: 'Email verified',
            isBuyer: 'Is buyer',
            isSeller: 'Is seller',
            phone: 'Phone',
            street: 'Street',
            zip: 'ZIP',
            city: 'City',
            iban: 'IBAN',
            vat: 'VAT',
            businessLicenseUrl: 'Business license',
            companyName: 'Company name',
            invoiceStreet: 'Street',
            invoiceZip: 'ZIP',
            invoiceCity: 'City',
            deliveryOptions: 'Delivery options',
            product: 'Product',
            productId: 'Product',
            id: 'Identifier',
            purchaseStatus: 'Purchase status',
            latestDeliveryDate: 'Latest delivery date',
            count: 'Count',
            containerTypesSingle: 'container type',
            containerTypesPlural: 'container types',
            categoriesSingle: 'category',
            categoriesPlural: 'categories',
            trucksSingle: 'truck',
            trucksPlural: 'trucks',
            productsSingle: 'product',
            productsPlural: 'products',
            usersSingle: 'user',
            usersPlural: 'users',
            itemsSingle: 'item',
            itemsPlural: 'items',
            meSingle: 'me',
            myCompanySingle: 'my company',
            buyer: 'Buyer',
            activeProductsSingle: 'active product',
            activeProductsPlural: 'active products',
            inactiveProductsSingle: 'inactive product',
            inactiveProductsPlural: 'inactive products',
            availableItemsSingle: 'available item',
            availableItemsPlural: 'available items',
            itemsInCartsSingle: 'item in cart',
            itemsInCartsPlural: 'items in cart',
            paidItemsSingle: 'paid item',
            paidItemsPlural: 'paid items',
            unsoldItemsSingle: 'unsold item',
            unsoldItemsPlural: 'unsold items',
            EMAIL: 'Email',
            PASSWORD: 'Password',
            REPEAT_PASSWORD: 'Repeat password',
            FIRST_NAME: 'First name',
            LAST_NAME: 'Last name',
            BUSINESS_LICENSE: 'Business license',
            PDF_LICENSE: 'PDF License',
            SELLER_DECLARE: 'I want to be a seller too',
            BUYER: 'Buyer',
            SELLER: 'Seller',
            ADMIN: 'Admin',

            RESTRICTED_ACCESS: 'Restricted access',
            RESTRICTED_ACCESS_MESSAGE_ADMIN: 'You have to be an admin to access this section',
            RESTRICTED_ACCESS_MESSAGE_SELLER: 'You have to be a seller to access this section',
            RESTRICTED_ACCESS_MESSAGE_BUYER: 'You have to be a buyer to access this section',

            SEARCH_RESULTS_HEADING: 'Search results for: ',
            SEARCH_RESULTS_FAILURE: 'Failed to fetch search results',

            FAILED_LOGOUT_NOTIFICATION: 'Failed to logout',

            HTTP_POST_SUCCESS_NOTIFICATION: ' successfully added',
            HTTP_POST_ERROR_NOTIFICATION: 'Failed to add ',

            HTTP_GET_ERROR_NOTIFICATION: 'Failed to fetch ',

            HTTP_PUT_SUCCESS_NOTIFICATION: ' successfully updated',
            HTTP_PUT_ERROR_NOTIFICATION: 'Failed to update ',

            HTTP_DELETE_SUCCESS_NOTIFICATION: ' successfully deleted',
            HTTP_DELETE_ERROR_NOTIFICATION: 'Failed to delete ',

            LOG_IN_TO_SEE_PRICE: 'Log in to see price',

            NO_OF_ITEMS: 'Number of items',

            DELIVERY_OPTION: 'Delivery option',
            DELIVERY_OPTIONS: 'Delivery options',
            MC_SWISS_DELIVERY: 'McSwiss delivery',
            SELLER_DELIVERY: 'Seller delivery',
            SELF_COLLECT: 'Self collect',
            DELIVERY_FEE: 'Delivery fee',
            DELIVERY_TOTAL: 'Delivery total',
            DELIVERY_ADDRESS: 'Delivery address',
            SAVED_ADDRESS: 'Saved address',

            REGISTRATION_CONFIRMATION: 'Thank you for registering. Click the link sent to your email address complete the registration.',

            PASSWORDS_MUST_MATCH: 'Passwords must match',

            COMPANY_ADDRESS: 'Company address',
            COLLECTION_ADDRESS: 'Collection address',
            SAME_COMPANY_COLLECTION_ADDRESS: 'Use company address for collection',

            COMPANY_NAME: 'Company name',
            STREET: 'Street',
            ZIP: 'ZIP',
            CITY: 'City',

            PAYMENT_OPTION: 'Option',
            CREDIT_CARD: 'Credit card',
            EUROCASH: 'Eurocash',
            DIRECT_DEBIT: 'Direct debit',

            NAME_ON_CARD: 'Name on card',
            CARD_NUMBER: 'Card number',
            EXPIRY_DATE: 'Card expiry date',
            CVC: 'Card CVC',

            CHECKOUT: 'Checkout',
            CONTINUE_SHOPPING: 'Continue shopping',
            PROCEED: 'Proceed',
            BACK: 'Back',
            PLACE_ORDER: 'Place order',

            REGISTER_OR_LOG_IN: 'Register or log in',

            BILLING: 'Billing',
            DELIVERY: 'Delivery',
            PAYMENT: 'Payment',
            SUMMARY: 'Summary',

            CHECKOUT_EXIT_CONFIRMATION: 'Are you sure you want to exit the checkout process?',
            EXIT: 'Exit',

            overview: 'Overview',
            products: 'Products',
            items: 'Items',
            activeProducts: 'Active products',
            inactiveProducts: 'Inactive products',
            availableItems: 'Available items',
            itemsInCarts: 'Items in carts',
            paidItems: 'Paid items',
            unsoldItems: 'Unsold items',

            profile: 'Profile',
            purchases: 'Purchases',

            CHECKOUT_TOTAL_TOO_LOW: 'To checkout your cart the total price must be minimum 50€. Please add more items below or continue shopping.',

            SHOPPING_CART_POST_ERROR_NOTIFICATION: 'Failed to create shopping cart',
            SHOPPING_CART_GET_ERROR_NOTIFICATION: 'Failed to fetch shopping cart',
            SHOPPING_CART_PUT_ERROR_NOTIFICATION: 'Failed to add items to shopping cart',
            SHOPPING_CART_PUT_MISMATCH_NOTIFICATION: 'More items of this product might not be available',

            REMOVE: 'Remove',

            // 404 page
            PAGE_NOT_FOUND: 'Page not found',
            BACK_TO_MAIN_PAGE: 'Go back to main page',
            PAGE_NOT_EXIST: 'The page doesn\'t exist or you don\'t have access permission to view it',

            // Password reset
            FORGOT_YOUR_PASSWORD: 'Forgot your password?',
            REMEMBER_YOUR_PASSWORD: 'Remember your password?',
            PASSWORD_RESET_INFO: 'Please enter your email address. A password reset link will be sent to you to complete the password change process.',
            RESET: 'Reset',
            PASSWORD_RESET_REQUEST_SUCCESS: 'A password change link has been sent to your email address. Please follow instructions in the email to change your password.',
            SET_PASSWORD_SUCCESS: 'Your password has been changed. Please login with your new password.',
            CHANGE_PASSWORD: 'Change password',

            // Buyer/purchases
            ID: 'Id',
            DATE: 'Date',
            STATUS: 'Status',

            // Profile
            me: 'Me',
            myCompany: 'My company',

            // Verify email
            VERIFY_EMAIL_SUCCESS: 'Your email has been successfully verified',
            VERIFY_EMAIL_ERROR: 'Failed to verify your email. Please register and click the link in your email',

            // Product lists
            NO_PRODUCTS_FOUND: 'No products found',

            // Footer links
            IMPRINT: 'Imprint',
            TERMS_OF_USE: 'Terms of use',
            DATA_PROTECTION: 'Data protection',
            FAQ: 'FAQ',

            // Order confirmation
            ORDER_CONFIRMATION: 'Thank you for shopping with us!',
            ORDER_NUMBER: 'Order number',
            ORDER_EMAIL_CONFIRMATION: 'Order details will be sent to your email shortly',
            BILLING_ADDRESS: 'Billing address',
            PRODUCTS_AND_DELIVERY: 'Products and delivery',
            TO: 'to',
            PRODUCTS_TOTAL: 'Products total',
            ORDER_TOTAL: 'Order total',

            // Form controls
            SELECT_VALUE: '-- select value --',

            // Items add modal
            ADD_ITEMS_AFTER_PRODUCT_ADD: 'Would you like to add items for this product?',

            // Admin overview
            ACTIVE_USERS: 'Active users',
            SALES: 'Sales',
            PODUCTS_ON_SALE: 'Products on sale',
            SELLERS: 'Sellers',
            BUYERS: 'Buyers',
            LAST_7_DAYS: 'Last 7 days',
            LAST_30_DAYS: 'Last 30 days',
            YESTERDAY: 'yesterday',
            PREVIOUS_PERIOD: 'previous period',
            NO_CHANGE: 'No change',

            // Product characteristics
            ORGANIC: 'Organic',
            VEGAN: 'Vegan',
            SUGAR_FREE: 'Sugar free',
            GLUTEN_FREE: 'Gluten free',
            GMO_FREE: 'GMO free',

            // Drag and drop file upload
            DRAG_AND_DROP: 'Or drag and drop file here',
            BROWSE: 'Browse',

            // File download
            DOWNLOAD: 'Download',

            validation: {
                required: 'Required',
                pattern: {
                    l: 'Only letters allowed',
                    ln: 'Only letters and numbers allowed',
                    lnsc: 'Only letters, numbers, spaces and commas allowed',
                    lnscda: 'Only letters, numbers, spaces, commas, dots and ampersands allowed',
                    lnscdad: 'Only letters, numbers, spaces, commas, dots, ampersands and dashes allowed',
                    ean8: 'EAN8 has to be 8 digits long',
                    ean13: 'EAN13 has to be 13 digits long',
                    zip: 'ZIP has to be 5 digits long',
                    password: 'Password has to be 8-20 characters long, contain large and small letter and number',
                    image: 'Only image files allowed',
                    imageOrPdf: 'Only image and pdf files allowed'
                },
                minlength: {
                    2: 'Minimum 2 characters required',
                    8: 'Minimum 8 characters required'
                },
                maxlength: {
                    20: 'Maximum 20 characters allowed',
                    30: 'Maximum 30 characters allowed'
                },
                min: {
                    0: 'Value cannot be negative'
                },
                max: {
                    100: 'Value cannot be greater than 100'
                },
                maxSize: {
                    5: 'Maximum file size of 5MB exceeded'
                },
                maxHeight: {
                    1000: 'Maximum file height of 1000 pixels exceeded',
                    2000: 'Maximum file height of 2000 pixels exceeded'
                },
                number: 'Invalid number',
                date: 'Invalid date',
                email: 'Invalid email',
                iban: 'Invalid iban'
            }
        };

        translations.seo = {
            base: 'Mc Swiss - Local food marketplace',
            admin: 'Admin',
            profile: 'Profile',

            'buying.categories': 'Category',
            'buying.products': 'Product',
            'buying.characteristics': 'Characteristic',
            'buying.search': 'Search results',
            'buying.seller': 'Seller'
        };

        var adminSections = {
            containerTypes: 'Container types',
            categories: 'Categories',
            trucks: 'Trucks',
            products: 'Products',
            users: 'Users',
            items: 'Items'
        };

        _.forEach(adminSections, function(name, key) {
            var base = translations.seo.admin + ' | ' + name;

            translations.seo['admin.' + key + '.list'] = base;
            translations.seo['admin.' + key + '.add'] = base + ' | ' + translations.ADD;
            translations.seo['admin.' + key + '.edit'] = base + ' | ' + translations.EDIT;
            translations.seo['admin.' + key + '.detail'] = base + ' | ' + translations.DETAIL;
        });

        var profileSections = {
            me: 'Me',
            myCompany: 'My company'
        };

        _.forEach(profileSections, function(name, key) {
            var base = translations.seo.profile + ' | ' + name;

            translations.seo['profile.' + key + '.edit'] = base + ' | ' + translations.EDIT;
            translations.seo['profile.' + key + '.detail'] = base + ' | ' + translations.DETAIL;
        });

        translations.seo['admin.overview'] = translations.seo.admin + ' | ' + translations.overview;

        return _.mapValues(translations, function addSuffix(value) {
            if (angular.isObject(value)) {
                return _.mapValues(value, addSuffix);
            }

            return value;
        });
    })());
