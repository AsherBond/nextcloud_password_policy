OC.L10N.register(
    "password_policy",
    {
    "Password is expired, please use forgot password method to reset" : "Hasło wygasło, użyj metody przypomnienia hasła, aby zresetować",
    "Password must not have been used recently before." : "Hasło nie było ostatnio używane.",
    "Password is among the 1,000,000 most common ones. Please make it unique." : "Hasło jest jednym z 1.000.000 najczęściej używanych haseł. Proszę wybrać inne.",
    "Password is present in compromised password list. Please choose a different password." : "Hasło jest obecne na liście haseł skompromitowanych. Wybierz inne hasło.",
    "Password needs to be at least %s characters long." : "Hasło musi zawierać co najmniej %s znaków.",
    "Password needs to contain at least one numeric character." : "Hasło musi zawierać co najmniej jeden znak numeryczny.",
    "Password needs to contain at least one special character." : "Hasło musi zawierać co najmniej jeden znak specjalny.",
    "Password needs to contain at least one lower and one upper case character." : "Hasło musi zawierać co najmniej jedną małą oraz wielką literę.",
    "Password policy" : "Polityka haseł",
    "Allows admins to configure a password policy" : "Zezwala administratorom na konfigurowanie zasad haseł.",
    "Allow admin to define certain pre-conditions for password, e.g. enforce a minimum length" : "Zezwala administratorowi na definiowanie określonych warunków wstępnych dla hasła, np. wymuszenie minimalnej długości",
    "General password policies" : "Ogólne zasady dotyczące haseł",
    "Add policy set" : "Dodaj zestaw zasad",
    "Login policies" : "Zasady logowania",
    "Password history size" : "Liczba zapamiętywanych haseł",
    "Number of passwords to keep (securely hashed) to prevent users from reusing previously used passwords." : "Liczba przechowywanych haseł (z bezpiecznym haszowaniem), aby zapobiec ponownemu użyciu wcześniej używanych haseł przez użytkowników",
    "Maximum login attempts" : "Maksymalna liczba prób logowania",
    "Number of login attempts before the user account will be disabled until manual action is taken. (0 for no limit)" : "Liczba prób logowania przed zablokowaniem konta użytkownika do czasu ręcznej interwencji. (0 oznacza brak limitu)",
    "Please note, this option is meant to protect attacked accounts. Disabled accounts have to be re-enabled manually by administration. Attackers that try to guess passwords of accounts will have their IP address blocked by the bruteforce protection independent from this setting." : "Pamiętaj, że ta opcja ma na celu ochronę zaatakowanych kont. Wyłączone konta muszą zostać ponownie włączone ręcznie przez administratora. Adresy IP atakujących próbujących odgadnąć hasła do kont zostaną zablokowane przez ochronę bruteforce niezależną od tego ustawienia.",
    "Number of days until user password expires" : "Liczba dni do wygaśnięcia hasła użytkownika",
    "Password expiration" : "Wygaśnięcie hasła",
    "Warning: enabling password expiration is nowadays considered a security risk by several security agencies." : "Ostrzeżenie: włączenie wygasania hasła jest obecnie uznawane przez wiele agencji bezpieczeństwa za zagrożenie dla bezpieczeństwa",
    "Remove policy" : "Usuń zasadę",
    "Minimum password length" : "Minimalna długość hasła",
    "Forbid common passwords" : "Zabroń takich samych haseł",
    "Enforce upper and lower case characters" : "Wymuś wielkie i małe litery",
    "Enforce numeric characters" : "Wymuś znaki numeryczne",
    "Enforce special characters" : "Wymuś znaki specjalne",
    "Check password against the list of breached passwords from haveibeenpwned.com" : "Sprawdź hasło na liście naruszonych haseł na haveibeenpwned.com",
    "This check creates a hash of the password and sends the first 5 characters of this hash to the haveibeenpwned.com API to retrieve a list of all hashes that start with those. Then it checks on the Nextcloud instance if the password hash is in the result set." : "Kontrola ta tworzy skrót hasła i wysyła 5 pierwszych znaków tego skrótu do interfejsu API haveibeenpwned.com w celu pobrania listy wszystkich skrótów, które zaczynają się od nich. Następnie sprawdza instancję Nextcloud, czy skrót hasła znajduje się w zestawie wyników.",
    "Account password policies" : "Zasady dotyczące haseł konta",
    "Share password policies" : "Udostępnij zasady dotyczące haseł",
    "Unknown error" : "Nieznany błąd",
    "Minimal length has to be a non negative number" : "Minimalna długość musi być liczbą nieujemną",
    "History size has to be a non negative number" : "Wielkość historii musi być liczbą nieujemną",
    "Expiration days have to be a non negative number" : "Dni do wygaśnięcia muszą być liczbą nieujemną",
    "Maximum login attempts have to be a non negative number" : "Maksymalna liczba prób logowania musi być liczbą nieujemną",
    "Settings saved" : "Ustawienia zapisane",
    "Error while saving settings" : "Błąd podczas zapisywania ustawień",
    "User password history" : "Historia haseł użytkownika"
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
