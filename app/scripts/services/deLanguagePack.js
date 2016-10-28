'use strict';

/**
 * @ngdoc service
 * @name contentfulCustomCmsApp.DELanguagePack
 * @description
 * # DELanguagePack
 * Constant in the contentfulCustomCmsApp.
 */
angular.module('contentfulCustomCmsApp')
    .constant('DELanguagePack', (function() {
        var translations = {
            HOME: 'Home [NT]',
            HELLO: 'Hallo',
            BUYING_SECTION_HEADER: 'Kaufen',
            SELLING_SECTION_HEADER: 'Verkaufen',
            ADMIN_SECTION_HEADER: 'Administration',
            LANGUAGE: 'Sprache',
            REGISTER: 'Registrieren',
            LOG_IN: 'Anmelden',
            PROFILE: 'Profil',
            PURCHASES: 'Käufe',
            NO_PURCHASES: 'No purchases [NT]',
            DELIVERIES: 'Lieferungen',
            PAYMENTS: 'Verkäufe',
            LOG_OUT: 'Abmelden',
            SLOGAN: 'Regionale Lebensmittel',
            SEARCH: 'Suche',
            SEARCH_PLACEHOLDER: 'Suche nach Produkt oder Kategorie',
            CATEGORIES: 'Kategorien',
            OVERVIEW: 'Übersicht',
            CONTAINER_TYPES: 'Transportbehälter',
            TRUCKS: 'Lieferwägen',
            PRODUCTS: 'Produkte',
            USERS: 'Benutzer',
            ITEMS: 'Einheiten',
            SHOPPING_CARTS: 'Einkaufswägen',
            DELETE_ITEM: 'Einheit löschen',
            SURE_TO_DELETE: 'Sind Sie sicher, dass Sie diese Einheit löschen möchten?',
            CANCEL: 'Abbrechen',
            DELETE: 'Löschen',
            ITEM_DETAIL: 'Details zur Einheit',
            ADD: 'Hinzufügen',
            SAVE: 'Speichern',
            NO: 'Nein',
            EDIT: 'Bearbeiten',
            DETAILS: 'Details',
            DETAIL: 'Detail',
            PRODUCT: 'Produkt',
            PRICE: 'Preis',
            VALID_UNTIL: 'Gültig bis',
            FROM: 'aus',
            CONTAINER: 'Transportbehälter',
            ITEMS_PER_CONTAINER: 'Einheiten / Transportbehälter',
            AVAILABLE: 'Verfügbar',
            NOT_AVAILABLE: 'Nicht verfügbar',
            ADD_TO_CART: 'In den Einkaufswagen',
            IN_CART: 'Im Einkaufswagen',
            EAN8: 'EAN8',
            EAN13: 'EAN13',
            CATEGORY: 'Kategorie',
            TAGS: 'Stichworte',
            CLOSE: 'Schließen',
            TO_CHECKOUT: 'Zur Kasse',
            IN_SHOPPING_CART: 'Im Einkaufswagen',
            TODAY: 'Heute',
            SOLD_LAST_7_DAYS: 'Verkauft (letzten 7 Tage)',
            SOLD_LAST_30_DAYS: 'Verkauft (letzten 30 Tage)',
            SOLD_LAST_180_DAYS: 'Verkauft (letzten 180 Tage)',
            UNSOLD: 'Nicht verkauft',
            SOLD: 'Verkauft',
            TOTAL: 'In Summe',
            VIEW_ALL: 'Alle anzeigen',
            AVAILABLE_ITEMS: 'Verfügbare Einheiten',
            NO_AVAILABLE_ITEMS: 'Nicht verfügbare Einheiten',
            SHOPPING_CART: 'Einkaufswagen',
            NO_ITEMS: 'Einkaufswagen ist leer. Klicken Sie auf "+" in einem Produkt, um es in den Einkaufswagen zu legen.',
            DELETE_ALL: 'Alle löschen',
            BUY: 'Kaufen',
            name: 'Name',
            volume: 'Volumen',
            deposit: 'Pfand',
            commission: 'Kommision',
            created: 'Erstellt',
            updated: 'Geändert',
            defaultVat: 'Vorschlag MwSt.',
            parentId: 'Übergeordnete Kategorie',
            icon: 'Icon',
            ordering: 'Sortierung',
            isActive: 'Ist aktiv',
            isOrganic: 'Ist bio',
            isVegan: 'Is vegan [NT]',
            isGlutenFree: 'Is gluten free [NT]',
            category: 'Kategory',
            imageUrl: 'Bild URL',
            image: 'Bild',
            categoryId: 'Kategorie',
            description: 'Beschreibung',
            sellerId: 'Verkäufer',
            price: 'Preis',
            unit: 'Verpackungseinheit',
            containerTypeId: 'Transportbehälter-Typ-Nummer',
            itemsPerContainer: 'Einheiten pro Transportbehälter',
            sellersProductIdentifier: 'Produkt-Nummer Verkäufer (intern)',
            ean8: 'EAN8',
            ean13: 'EAN13',
            tags: 'Stichworte',
            firstName: 'Vorname',
            lastName: 'Nachname',
            emailVerified: 'E-Mail (verifiziert)',
            isBuyer: 'Käufer',
            isSeller: 'Verkäufer',
            phone: 'Telefon',
            street: 'Straße',
            zip: 'PLZ',
            city: 'Ort',
            iban: 'IBAN',
            vat: 'MwSt.',
            businessLicenseUrl: 'Gewerbeschein',
            companyName: 'Firmenname',
            invoiceStreet: 'Straße',
            invoiceZip: 'PLZ',
            invoiceCity: 'Ort',
            deliveryOptions: 'Lieferoptionen',
            product: 'Produkt',
            productId: 'Produkt',
            id: 'Identifier [NT]',
            purchaseStatus: 'Status Verkauf',
            latestDeliveryDate: 'Spätestes Lieferdatum',
            count: 'Anzahl',
            containerTypesSingle: 'Transportbehälter',
            containerTypesPlural: 'Transportbehälter',
            categoriesSingle: 'Kategorie',
            categoriesPlural: 'Kategorien',
            trucksSingle: 'Lieferwagen',
            trucksPlural: 'Lieferwägen',
            productsSingle: 'Produkt',
            productsPlural: 'Produkte',
            usersSingle: 'Nutzer',
            usersPlural: 'Nutzer',
            itemsSingle: 'Einheit',
            itemsPlural: 'Einheiten',
            meSingle: 'me [NT]',
            myCompanySingle: 'my company [NT]',
            buyer: 'Käufer',
            activeProductsSingle: 'aktives Produkt',
            activeProductsPlural: 'aktive Produkte',
            inactiveProductsSingle: 'inaktives Produkt',
            inactiveProductsPlural: 'inaktive Produkte',
            availableItemsSingle: 'verfügbares Produkt',
            availableItemsPlural: 'verfügbare Produkte',
            itemsInCartsSingle: 'Einheit im Einkaufswagen',
            itemsInCartsPlural: 'Einheiten im Einkaufswagen',
            paidItemsSingle: 'bezahlte Einheit',
            paidItemsPlural: 'bezahlte Einheiten',
            unsoldItemsSingle: 'unverkaufe Einheit',
            unsoldItemsPlural: 'unverkaufte Einheiten',
            EMAIL: 'E-Mail',
            PASSWORD: 'Passwort',
            REPEAT_PASSWORD: 'Passwort wdh.',
            FIRST_NAME: 'Vorname',
            LAST_NAME: 'Nachname',
            BUSINESS_LICENSE: 'Gewerbeschein',
            PDF_LICENSE: 'PDF License [NT]',
            SELLER_DECLARE: 'Auch Verkäufer',
            BUYER: 'Käufer',
            SELLER: 'Verkäufer',
            ADMIN: 'Administrator',

            RESTRICTED_ACCESS: 'Gesperrter Bereich',
            RESTRICTED_ACCESS_MESSAGE_ADMIN: 'Sie müssen Administrator sein, um diesen Bereich zu besuchen.',
            RESTRICTED_ACCESS_MESSAGE_SELLER: 'Sie müssen Verkäufer sein, um diese Bereich zu besuchen.',
            RESTRICTED_ACCESS_MESSAGE_BUYER: 'Sie müssen Käufer sein, um diesen Bereich zu besuchen',

            SEARCH_RESULTS_HEADING: 'Suchergebnisse für: ',
            SEARCH_RESULTS_FAILURE: 'Fehler beim Laden der Suchergebnisse',

            FAILED_LOGOUT_NOTIFICATION: 'Fehler beim Abmelden',

            HTTP_POST_SUCCESS_NOTIFICATION: ' erfolgreich geladen',
            HTTP_POST_ERROR_NOTIFICATION: 'Fehler beim Hinzufügen ',

            HTTP_GET_ERROR_NOTIFICATION: 'Fehler beim Laden ',

            HTTP_PUT_SUCCESS_NOTIFICATION: ' erfolgreich aktualisiert.',
            HTTP_PUT_ERROR_NOTIFICATION: 'Fehler beim Aktualisieren ',

            HTTP_DELETE_SUCCESS_NOTIFICATION: ' erfolgreich gelöscht',
            HTTP_DELETE_ERROR_NOTIFICATION: 'Fehler beim Löschen ',

            LOG_IN_TO_SEE_PRICE: 'Anmelden für Preisinformation',

            NO_OF_ITEMS: 'Anzahl Einheiten',

            DELIVERY_OPTION: 'Lieferoption',
            DELIVERY_OPTIONS: 'Lieferoptionen',
            MC_SWISS_DELIVERY: 'Meck-Schweizer Lieferung',
            SELLER_DELIVERY: 'Durch Verkäufer',
            SELF_COLLECT: 'Selbstabholung',
            DELIVERY_FEE: 'Liefergebühr',
            DELIVERY_TOTAL: 'Lieferkosten gesamt',
            DELIVERY_ADDRESS: 'Lieferadresse',
            SAVED_ADDRESS: 'Saved address [NT]',

            REGISTRATION_CONFIRMATION: 'Vielen Dank für Ihre Registrierung. Sie erhalten gleich eine E-Mail. Bitte klicken Sie auf den Bestätigungslink, um die Registrierung abzuschließen.',

            PASSWORDS_MUST_MATCH: 'Passwörter stimmen nicht überein',

            COMPANY_ADDRESS: 'Firmenanschrift',
            COLLECTION_ADDRESS: 'Adressen',
            SAME_COMPANY_COLLECTION_ADDRESS: 'Firmenanschrift als Lieferanschrift verwenden',

            COMPANY_NAME: 'Firma',
            STREET: 'Straße & Nummer',
            ZIP: 'PLZ',
            CITY: 'Ort',

            PAYMENT_OPTION: 'Zahlung',
            CREDIT_CARD: 'Kreditkarte',
            EUROCASH: 'EC',
            DIRECT_DEBIT: 'Direktüberweisung',

            NAME_ON_CARD: 'Karteninhaber',
            CARD_NUMBER: 'Kartennummer',
            EXPIRY_DATE: 'Kartenablaufdatum',
            CVC: 'KartenCVC',

            CHECKOUT: 'Zur Kasse',
            CONTINUE_SHOPPING: 'Abbrechen',
            PROCEED: 'Weiter',
            BACK: 'Zurück',
            PLACE_ORDER: 'Kaufen',

            REGISTER_OR_LOG_IN: 'Registrieren oder anmelden',

            BILLING: 'Rechnung',
            DELIVERY: 'Liferung',
            PAYMENT: 'Zahlung',
            SUMMARY: 'Zusammenfassung',

            CHECKOUT_EXIT_CONFIRMATION: 'Sind Sie sicher, dass Sie den Kaufprozess abbrechen möchten?',
            EXIT: 'Ja, abbrechen',

            overview: 'Übersicht',
            products: 'Produkte',
            items: 'Einheiten',
            activeProducts: 'Aktive Produkte',
            inactiveProducts: 'Inaktive Produkte',
            availableItems: 'Verfügbare Einheiten',
            itemsInCarts: 'Einheiten im Einkaufswagen',
            paidItems: 'Verkaufte Einheiten',
            unsoldItems: 'Unverkaufte Einheiten',

            profile: 'Profil',
            purchases: 'Einkäufe',

            CHECKOUT_TOTAL_TOO_LOW: 'Der Mindestbestellwert beträgt 50€. Bitte fügen Sie mehr Einheiten oder Produkte zu Ihrem Einkaufswagen zu.',

            SHOPPING_CART_POST_ERROR_NOTIFICATION: 'Fehler beim Erstellen des Einkaufswagens',
            SHOPPING_CART_GET_ERROR_NOTIFICATION: 'Fehler beim Laden des Einkaufswagens',
            SHOPPING_CART_PUT_ERROR_NOTIFICATION: 'Fehler beim Hinzufügen von Einheiten zum Einkaufswagen',
            SHOPPING_CART_PUT_MISMATCH_NOTIFICATION: 'Von diesem Produkt sind keine weiteren Einheiten verfügbar',

            REMOVE: 'Entfernen',

            // 404 page
            PAGE_NOT_FOUND: 'Seite nicht gefunden',
            BACK_TO_MAIN_PAGE: 'Zurück zur Startseite',
            PAGE_NOT_EXIST: 'The page doesn\'t exist or you don\'t have access permission to view it [NT]',

            // Password reset
            FORGOT_YOUR_PASSWORD: 'Passwort vergessen',
            REMEMBER_YOUR_PASSWORD: 'Passwort vergessen.',
            PASSWORD_RESET_INFO: 'Bitte geben Sie Ihre E-Mail-Adresse ein. Wir senden Ihnen einen Link, um das Passwort zu ändern.',
            RESET: 'Zurücksetzen',
            PASSWORD_RESET_REQUEST_SUCCESS: 'Wir haben Ihnen einen Passwort-zurücksetzen-Link geschickt. Bitte folgenden Sie den Hinweisen in der E-Mail.',
            SET_PASSWORD_SUCCESS: 'Ihr Passwort wurde geändert. Bitte melden Sie sich erneut an mit Ihrem neuen Passwort.',
            CHANGE_PASSWORD: 'Passwort ändern',

            // Buyer/purchases
            ID: 'Kennung',
            DATE: 'Datum',
            STATUS: 'Status',

            // Profile
            me: 'Me [NT]',
            myCompany: 'My company [NT]',

            // Verify email
            VERIFY_EMAIL_SUCCESS: 'Ihre E-Mail-Adresse wurde erfolgreich bestätigt.',
            VERIFY_EMAIL_ERROR: 'Fehler beim Bestägtigen Ihrer E-Mail-Adresse. Bitte registrieren Sie sich und klicken Sie auf den Link in der Bestätigungsmail.',

            // Product lists
            NO_PRODUCTS_FOUND: 'Keine Produkte gefunden.',

            // Footer links
            IMPRINT: 'Impressum',
            TERMS_OF_USE: 'Nutzungsbedigungen',
            DATA_PROTECTION: 'Datenschutzerklärung',
            FAQ: 'Häufige Fragen',

            // Order confirmation
            ORDER_CONFIRMATION: 'Vielen Dank für Ihren Einkauf!',
            ORDER_NUMBER: 'Order number [NT]',
            ORDER_EMAIL_CONFIRMATION: 'Order details will be sent to your email shortly [NT]',
            BILLING_ADDRESS: 'Billing address [NT]',
            PRODUCTS_AND_DELIVERY: 'Products and delivery [NT]',
            TO: 'to [NT]',
            PRODUCTS_TOTAL: 'Products total [NT]',
            ORDER_TOTAL: 'Order total [NT]',

            // Form controls
            SELECT_VALUE: '-- select value -- [NT]',

            // Items add modal
            ADD_ITEMS_AFTER_PRODUCT_ADD: 'Would you like to add items for this product? [NT]',

            // Admin overview
            ACTIVE_USERS: 'Active users [NT]',
            SALES: 'Sales [NT]',
            PODUCTS_ON_SALE: 'Products on sale [NT]',
            SELLERS: 'Sellers [NT]',
            BUYERS: 'Buyers [NT]',
            LAST_7_DAYS: 'Last 7 days [NT]',
            LAST_30_DAYS: 'Last 30 days [NT]',
            YESTERDAY: 'yesterday [NT]',
            PREVIOUS_PERIOD: 'previous period [NT]',
            NO_CHANGE: 'No change [NT]',

            // Product characteristics
            ORGANIC: 'Organic [NT]',
            VEGAN: 'Vegan [NT]',
            SUGAR_FREE: 'Sugar free [NT]',
            GLUTEN_FREE: 'Gluten free [NT]',
            GMO_FREE: 'GMO free [NT]',

            // Drag and drop file upload
            DRAG_AND_DROP: 'Or drag and drop file here [NT]',
            BROWSE: 'Browse [NT]',

            // File download
            DOWNLOAD: 'Download [NT]',

            LATITUDE: 'Latitude [NT]',
            LONGITUDE: 'Longitude [NT]',

            validation: {
                required: 'Erforderlich',
                pattern: {
                    l: 'Nur Buchstaben zulässig',
                    ln: 'Nur Buchstaben und Ziffern zulässig',
                    lnsc: 'Nur Buchstaben, Ziffern, Leerzeichen und Kommas zulässig',
                    lnscda: 'Nur Buchstaben, Ziffern, Leerzeichen, Kommas und Punkte zulässig.',
                    lnscdad: 'Only letters, numbers, spaces, commas, dots, ampersands and dashes allowed [NT]',
                    ean8: 'EAN8 muss 8 Ziffern haben',
                    ean13: 'EAN13 muss 13 ziffern haben',
                    zip: 'ZIP has to be 5 digits long [NT]',
                    password: 'Passwort muss 8-20 Zeichen lang sein, einen kleinen, einen großen Buchstaben und eine Zahl beinhalten',
                    image: 'Nur Bild-Dateien zulässig',
                    imageOrPdf: 'Nur Bilder und PDFs zulässig'
                },
                minlength: {
                    2: 'Mindestens 2 Zeichen erforderlich',
                    8: 'Mindestens 8 Zeichen erforderlich'
                },
                maxlength: {
                    20: 'Höchstens 20 Zeichen zulässig',
                    30: 'Höchstens 30 Zeichen zulässig'
                },
                min: {
                    0: 'Wert muss positiv sein'
                },
                max: {
                    100: 'Wert muss kleiner sein als 100'
                },
                maxSize: {
                    5: 'Maximale Dateigröße von 5MB überschritten'
                },
                maxHeight: {
                    1000: 'Maximale Dateigröße von 1000 Pixel überschritten',
                    2000: 'Maximale Dateigröße von 2000 Pixel überschritten'
                },
                number: 'Ungültige Nummer',
                date: 'Ungültiges Dateum',
                email: 'Ungültige E-Mail',
                iban: 'Ungültige IBAN'
            }
        };

        translations.seo = {
            base: 'Meck-Schweizer - Regionale Lebensmittel',
            admin: 'Administration',
            profile: 'Profil',

            'buying.categories': 'Kategorie',
            'buying.products': 'Produkt',
            'buying.characteristics': 'Characteristic [NT]',
            'buying.search': 'Suchergebnisse',
            'buying.seller': 'Verkäufer'
        };

        var adminSections = {
            containerTypes: 'Transportbehälter',
            categories: 'Kategorien',
            trucks: 'Lieferwägen',
            products: 'Produkte',
            users: 'Benutzer',
            items: 'Einheiten'
        };

        _.forEach(adminSections, function(name, key) {
            var base = translations.seo.admin + ' | ' + name;

            translations.seo['admin.' + key + '.list'] = base;
            translations.seo['admin.' + key + '.add'] = base + ' | ' + translations.ADD;
            translations.seo['admin.' + key + '.edit'] = base + ' | ' + translations.EDIT;
            translations.seo['admin.' + key + '.detail'] = base + ' | ' + translations.DETAIL;
        });

        var profileSections = {
            me: 'Me [NT]',
            myCompany: 'My company [NT]'
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
