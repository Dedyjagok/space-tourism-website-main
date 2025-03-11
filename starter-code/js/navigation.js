// Function to fetch JSON data
async function fetchData() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to handle tab changes
function setupTabs(tabList, tabPanels, dataType) {
    if (!tabList || !tabPanels) return;
    
    fetchData().then(data => {
        const tabButtons = tabList.querySelectorAll('[role="tab"]');
        
        tabButtons.forEach((tab, idx) => {
            tab.addEventListener('click', () => {
                // Hide all panels
                tabPanels.forEach(panel => {
                    panel.setAttribute('hidden', true);
                });
                
                // Show selected panel
                tabPanels[idx].removeAttribute('hidden');
                
                // Set selected state for tabs
                tabButtons.forEach(tabButton => {
                    tabButton.setAttribute('aria-selected', false);
                });
                tab.setAttribute('aria-selected', true);
                
                // Update content based on data.json
                updateContent(data[dataType][idx]);
            });
        });
    });
}

// You would implement updateContent differently for each page type
function updateContent(data) {
    // This would be implemented specifically for each page type
    // (destinations, crew, technology)
    console.log(data);
}