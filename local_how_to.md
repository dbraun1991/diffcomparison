
# Generate a password for local insprection

1. Open any webpage (or just open a new tab)
2. Press **F12** (or right-click → "Inspect")
3. Go to the **Console** tab
4. Copy and paste this code:

```javascript
async function generatePasswordHash(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    console.log('Password Hash:', hashHex);
    return hashHex;
}

// Usage: Replace 'YOUR_PASSWORD_HERE' with your actual password
generatePasswordHash('YOUR_PASSWORD_HERE');
```

5. Replace `'YOUR_PASSWORD_HERE'` with your actual password
6. Press **Enter**
7. Copy the hash that appears into the `password-auth.js`-file
