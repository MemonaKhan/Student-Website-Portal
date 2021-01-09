import React, { Component } from 'react';

 class D extends Component {
  constructor() {
    
super();
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
    
  }

  render() {
    return (
        <>
        <h1>ghghh</h1>
        <div id="collapseA" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar" >
              
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
                <div class="bg-white py-2 collapse-inner rounded"

                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
              <a class="collapse-item" href="/Superadmin/Home/addarticle">ADD</a>
              <a class="collapse-item" href="/Superadmin/Home/articletyped">ARTICLE TYPE</a>
              <a class="collapse-item" href="/Superadmin/Home/viewarticel">View</a>
</div>
            )
            : (
              null
            )
        }

      </div>
     
      <div id="collapseA" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar" >
              
      <button onClick={this.showMenu}>
        Show menu
      </button>
      
      {
        this.state.showMenu
          ? (
              <div class="bg-white py-2 collapse-inner rounded"

              className="menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
              >
            <input type="text" ></input>
              </div>
          )
          : (
            null
          )
      }
      
    </div>
  
      </>
    );
  }
}
export default D;

                        
                    