import React from 'react';
function Brokerage () {
    return (  
           <div className='container mt-5 p-5'>
            <div className='row mt-5 mb-5'>
                <h3 className='text-center mb-5'><span className='text-primary'>Calculate your costs upfront</span> using our brokerage calculator</h3>
                    <h2 className='mx-5'>Charges for account opening</h2>
                <div className='col p-5'>
                    <table  className="custom-table" border="1">
      <thead>
        <tr>
          <th>Type of Account</th>
          <th>Charges</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Online account</td>
          <td className='text-light btn my-1 mx-3 btn-success'>Free</td>
        </tr>
        <tr>
          <td>Offline account</td>
          <td className='text-light btn my-1 mx-3 btn-success'>Free</td>
        </tr>
                <tr>
          <td>NRI account (offline only)</td>
          <td>₹ 500</td>
        </tr>
                        <tr>
          <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
          <td>₹ 500</td>
        </tr>
      </tbody>
    </table>

                </div>
                </div>
            </div>
    );
}

export default Brokerage ;