import { useState } from "react";
import "./checkout.css";
import { useForm, Controller } from "react-hook-form";
import cartIt from "../../assets/cart/image-zx7-speaker.jpg";

function Checkout() {
  const { control, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [selectedPayment, setSelectedPayment] = useState("e-money");

  const onSubmit = () => {
    alert("form submitted");
  };

  return (
    <div className="Checkout">
      <div className="check">
        <h1>Checkout</h1>

        <form id="my-form" onSubmit={handleSubmit(onSubmit)} className="form">
          <h3>Billing Details</h3>
          <div className="billing">
            <div className="err">
              <Controller
                name="billingName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <label>
                    Name
                    <input type="text" placeholder="Alexei Ward" {...field} />
                  </label>
                )}
                rules={{ required: "Can't be empty" }}
              />
              {errors.billingName && (
                <p className="errors">{errors.billingName.message}</p>
              )}
            </div>

            <div className="err">
              <Controller
                name="billingEmail"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <label>
                    Email Address
                    <input
                      type="email"
                      placeholder="alexei@mail.com"
                      {...field}
                    />
                  </label>
                )}
                rules={{ required: "Can't be empty", pattern: /^\S+@\S+$/i }}
              />
              {errors.billingEmail && (
                <p className="errors">{errors.billingEmail.message}</p>
              )}
            </div>

            <div className="err">
              <Controller
                name="billingPhone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <label>
                    Phone Number
                    <input
                      type="phone"
                      placeholder="+1 202-555-0136"
                      {...field}
                    />
                  </label>
                )}
                rules={{ required: "Can't be empty" }}
              />
              {errors.billingPhone && (
                <p className="errors">{errors.billingPhone.message}</p>
              )}
            </div>
          </div>

          <h3>Shipping Information</h3>
          <div className="shipping">
            <div className="err address">
              <Controller
                name="shippingAddress"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <label className="address">
                    Address
                    <input
                      type="text"
                      placeholder="1137 Williams Avenue"
                      {...field}
                    />
                  </label>
                )}
                rules={{ required: "Can't be empty" }}
              />
              {errors.shippingAddress && (
                <p className="errors">{errors.shippingAddress.message}</p>
              )}
            </div>

            <div className="err">
              <Controller
                name="shippingZipCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <label>
                    ZIP Code
                    <input type="text" placeholder="10001" {...field} />
                  </label>
                )}
                rules={{ required: "Can't be empty" }}
              />
              {errors.shippingZipCode && (
                <p className="errors">{errors.shippingZipCode.message}</p>
              )}
            </div>

            <div className="err">
              <Controller
                name="shippingCity"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <label>
                    City
                    <input type="text" placeholder="New York" {...field} />
                  </label>
                )}
                rules={{ required: "Can't be empty" }}
              />
              {errors.shippingCity && (
                <p className="errors">{errors.shippingCity.message}</p>
              )}
            </div>
            <div className="err">
              <Controller
                name="shippingCountry"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <label>
                    Country
                    <input type="text" placeholder="United States" {...field} />
                  </label>
                )}
                rules={{ required: "Can't be empty" }}
              />
              {errors.shippingCountry && (
                <p className="errors">{errors.shippingCountry.message}</p>
              )}
            </div>
          </div>

          <h3>Payment Details</h3>
          <div className="details">
            <h4>Payment Method</h4>
            <Controller
              name="payment"
              control={control}
              defaultValue="e-money"
              render={({ field }) => {
                const isEMoneyChecked = field.value === "e-money";
                return (
                  <div className="options">
                    <div className="opt">
                      <input
                        type="radio"
                        value="e-money"
                        placeholder="E-Money"
                        {...field}
                        checked={isEMoneyChecked}
                        onChange={() => {
                          field.onChange("e-money");
                          setSelectedPayment("e-money");
                        }}
                      />
                      <label>e-Money</label>
                    </div>
                    <div className="opt">
                      <input
                        type="radio"
                        value="cash-on-delivery"
                        placeholder="Cash on Delivery"
                        {...field}
                        checked={!isEMoneyChecked}
                        onChange={() => {
                          field.onChange("cash-on-delivery");
                          setSelectedPayment("cash-on-delivery");
                        }}
                      />
                      <label>Cash on Delivery</label>
                    </div>
                  </div>
                );
              }}
              rules={{ required: "Payment Method is required" }}
            />
            {errors.payment && (
              <p className="errors">{errors.payment.message}</p>
            )}
          </div>

          {selectedPayment === "e-money" && (
            <div className="e-money">
              <div className="err">
                <Controller
                  name="emoneyNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <label>
                      e-Money Number
                      <input type="text" placeholder="238521993" {...field} />
                    </label>
                  )}
                  rules={{ required: "Can't be empty" }}
                />
                {errors.emoneyNumber && (
                  <p className="errors">{errors.emoneyNumber.message}</p>
                )}
              </div>
              <div className="err">
                <Controller
                  name="emoneyPin"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <label>
                      e-Money PIN
                      <input type="password" placeholder="6391" {...field} />
                    </label>
                  )}
                  rules={{ required: "Can't be empty" }}
                />
                {errors.emoneyPin && (
                  <p className="errors">{errors.emoneyPin.message}</p>
                )}
              </div>
            </div>
          )}
        </form>
      </div>

      <div className="summary">
        <h3>summary</h3>

        <div className="cart-list">
          <div className="cart-item">
            <img src={cartIt} alt="cref" />
            <div className="dp">
              <span className="dp-t">XX17 II</span>
              <span className="dp-p">$452</span>
            </div>
            <span id="count">x1</span>
          </div>
        </div>

        <div id="prices">
          <div className="total">
            <span className="ttl-text">total</span>
            <span className="total-price">$5123</span>
          </div>
          <div className="total">
            <span className="ttl-text">Shipping</span>
            <span className="total-price">$51</span>
          </div>
          <div className="total">
            <span className="ttl-text">Vat(included)</span>
            <span className="total-price">$1029</span>
          </div>
        </div>

        <div className="total" id="ttl">
          <span className="ttl-text">Grand total</span>
          <span className="total-price" id="tp">
            $5123
          </span>
        </div>

        <button form="my-form" className="pay">
          Continue & pay
        </button>
      </div>
    </div>
  );
}

export default Checkout;
