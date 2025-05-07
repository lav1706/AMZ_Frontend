import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <div className="container">
        
        <section className="py-2">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            className="img-fluid rounded"
          />
        </section>
  
     
        <section className="mt-4 mb-3">
          <h2 className="mb-3 text-center">Category</h2>
          <div className="row justify-content-center gap-4">
          
            <div className="col-12 col-md-6 col-lg-5">
              <div className="card shadow-sm">
                <div
                  className="overflow-hidden rounded-top"
                  style={{ height: "180px" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    alt="Women"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title"><Link to="/product" style={{ textDecoration: "none", color: "inherit" }}>Women</Link></h5>
                  <p className="card-text text-muted">Explore the latest styles.</p>
                </div>
              </div>
            </div>
  
            
            <div className="col-12 col-md-6 col-lg-5">
              <div className="card shadow-sm">
                <div
                  className="overflow-hidden rounded-top"
                  style={{ height: "180px" }}
                >
                  <img
                    src="https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    alt="Men"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title"><Link to='/product' style={{ textDecoration: "none", color: "inherit" }}>Men</Link></h5>
                  <p className="card-text text-muted">Fresh fashion trends for men.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default HomePage;
  