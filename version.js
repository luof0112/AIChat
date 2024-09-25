import { writeFile } from 'fs/promises';

// Write the current timestamp to version.txt
const updateVersionFile = async () => {
    try {
        const timestamp = new Date().getTime().toString();
        await writeFile('./public/version.txt', timestamp);
        console.log('Version file updated successfully.');
    } catch (error) {
        console.error('Error updating version file:', error);
    }
};

// Call the function to update the version file
updateVersionFile()
