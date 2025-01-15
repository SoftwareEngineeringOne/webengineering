import path from 'node:path';
import fs from "node:fs";

export const views = {
    /**
     * @param view
     * @returns {string} - The path to the view file.
     */
    getViewPath: (view) => {
        return path.join(process.cwd(), 'src', 'views', view + '.html');
    },

    /**
     * @param component
     * @returns {string} - The path to the component file.
     */
    getComponentPath: (component) => {
        return path.join(process.cwd(), 'src', 'views', 'components', component + '.html');
    },


    /**
     * Load a view with the navbar component.
     * @param {string} view - The name of the view to load.
     * @returns {Promise<string>} - The HTML content with the navbar included.
     * @throws {Error} - If there is an error reading the files.
     */
    loadViewWithNavbar: async (view) => {
        const navbarPath = views.getComponentPath('navbar');
        const viewPath = views.getViewPath(view);
        const [navbar, page] = await Promise.all([readFile(navbarPath), readFile(viewPath)]);

        return page.toString().replace('<Navbar/>', navbar);
    }
}

/**
 * Read file
 * @param {string} filePath
 * @returns {Promise<unknown>}
 */
const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}