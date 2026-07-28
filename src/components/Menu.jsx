import { menuData, menuTabs } from '../data/menu'

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <div className="menu-item-head">
        <span className="menu-item-name">
          {item.name}
          {item.star && <span className="menu-item-star">{item.star}</span>}
          {item.badge && <span className="menu-item-badge">{item.badge}</span>}
        </span>
        <span className="menu-item-dots" />
        <span className="menu-item-price">{item.price}</span>
      </div>
      {item.desc && <p className="menu-item-desc">{item.desc}</p>}
    </div>
  )
}

function Menu({ activeTab, setActiveTab }) {
  const current = menuData[activeTab]

  return (
    <section id="menu">
      <div className="container">
        <div className="menu-header">
          <div className="menu-header-top">
            <span className="label">El Menú</span>
            <h2>Sabores auténticos<br />de la tradición italiana</h2>
            <span className="gold-line" />
          </div>

          <div className="menu-tabs">
            {menuTabs.map((tab) => (
              <button
                key={tab.id}
                className={`menu-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-lists">
          <div className="menu-list visible">
            {current.note && <p className="menu-list-note">{current.note}</p>}
            {current.sections.map((section, i) => (
              <div key={section.title || i}>
                {section.title && (
                  <div className="menu-list-section-title">{section.title}</div>
                )}
                {section.items.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
